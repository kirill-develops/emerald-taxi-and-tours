import { createStripeTourPrice, processTourPrices } from '../../../server/controller/create-products/tourPrices';
import { createStripeTourProduct, processTourProducts } from '../../../server/controller/create-products/tourProducts';
import { createStripeTransferPrice, processTransferPrices } from '../../../server/controller/create-products/transferPrices';
import { createStripeTransferProduct, processTransferProducts } from '../../../server/controller/create-products/transferProducts';

const transferData = require('@data/transferData.json');
const tourData = require('@data/tourData.json');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

function returnErrors(result) { return result ? result.reason || { ...result.value, ...result.type, ...result.statusCode } : null }

function checkForErrors(result) {
   return result ?
      result.status === 'rejected' || result.statusCode !== 200
      : null
}

async function asyncMapWithConcurrency(arr, asyncFn) {
   if (arr.length > 0) {
      const concurrencyLimit = 3;
      const results = [];
      const queue = arr.slice();

      async function processQueue() {
         while (queue.length > 0) {
            const item = queue.shift();
            const result = await asyncFn(item);
            results.push(result);
         }
      }

      const tasks = Array.from({ length: concurrencyLimit }, processQueue);
      await Promise.all(tasks);

      return results;
   }

   return [];
}

async function retrieveProductFromStripe(product) {
   try {
      return await stripe.products.retrieve(product.stripeId);
   } catch (error) {
      return { productId: product.stripeId, error, product };
   }
}

async function retrievePriceFromStripe(price) {
   try {
      const productPrices = await stripe.prices.list({ product: price.productId });

      const stripePriceObj = productPrices.data.find(priceObj => priceObj.lookup_key === price.id);

      return stripePriceObj ?? {
         price,
         priceId: price?.id,
         error: {
            message: `${price.id} Stripe price could not be found`
         }
      };
   } catch (error) {
      console.error('retrievePriceFromStripe: ', error.message);
      return {
         priceId: price?.id,
         error: error?.message,
         price
      };
   }
}

async function processAndCreateProducts(products, processFn, createFn) {
   try {
      const processedProducts = products?.flatMap(processFn);

      const results = await asyncMapWithConcurrency(processedProducts, retrieveProductFromStripe);

      // Separate successfully retrieved products from those with errors
      const retrievedProducts = results.filter((result) => result && !result.error);
      const unfoundProducts = results.filter((result) => result.error).map(({ product }) => product);

      const createdProducts = await asyncMapWithConcurrency(unfoundProducts, createFn);

      let failedProducts, successfulProducts;

      if (createdProducts.length > 0) {
         failedProducts = createdProducts
            ?.filter(checkForErrors)
            ?.map(returnErrors);

         successfulProducts = createdProducts
            ?.filter(!checkForErrors);
      }

      return {
         retrievedProducts,
         unfoundProducts,
         successfulProducts,
         failedProducts,
         processedProducts
      };
   } catch (err) {
      console.log('processAndCreateProducts: ', err.message);

      return err;
   }
}

async function processAndCreatePrices(data, processFn, createFn) {
   try {
      const processedPrices = data?.flatMap(processFn);

      const results = await asyncMapWithConcurrency(processedPrices, retrievePriceFromStripe);

      const retrievedPrices = results.filter((result) => result && !result?.error);
      const unfoundPrices = results.filter((result) => result?.error).map(({ price }) => price);

      const createdPrices = await asyncMapWithConcurrency(unfoundPrices, createFn);

      let failedPrices, successfulPrices;

      if (createdPrices.length > 0) {
         failedPrices = createdPrices
            ?.filter(checkForErrors);

         successfulPrices = createdPrices
            ?.filter(!checkForErrors);
      }

      return {
         retrievedPrices,
         unfoundPrices,
         successfulPrices,
         failedPrices,
         processedPrices,
         results
      };
   } catch (err) {
      console.log('processAndCreatePrices: ', err);

      return err;
   }
}

export default async function handler(req, res) {
   try {
      const {
         successfulProducts: transferUploadedProducts = [],
         failedProducts: transferFailedProducts = [],
         retrievedProducts: transferRetrievedProducts = [],
         unfoundProducts: transferUnfoundProducts = []
      } = await processAndCreateProducts(
         transferData,
         processTransferProducts,
         createStripeTransferProduct
      );

      const {
         successfulPrices: transferUploadedPrices = [],
         failedPrices: transferFailedPrices = [],
         retrievedPrices: transferRetrievedPrices = [],
         unfoundPrices: transferUnfoundPrices = [],
      } = await processAndCreatePrices(
         transferData,
         processTransferPrices,
         createStripeTransferPrice,
      );

      const {
         retrievedProducts: tourRetrievedProducts = [],
         unfoundProducts: tourUnfoundProducts = [],
         successfulProducts: tourUploadedProducts = [],
         failedProducts: tourFailedProducts = [],
      } = await processAndCreateProducts(
         tourData,
         processTourProducts,
         createStripeTourProduct,
      );

      const {
         createdPrices: tourUploadedPrices = [],
         failedPrices: tourFailedPrices = [],
         retrievedPrices: tourRetrievedPrices = [],
         unfoundPrices: tourUnfoundPrices = [],
      } = await processAndCreatePrices(
         tourData,
         processTourPrices,
         createStripeTourPrice
      );

      res.status(200).json({
         transfer: {
            transferData,
            products: {
               retrieved: transferRetrievedProducts,
               unfound: transferUnfoundProducts,
               uploaded: transferUploadedProducts,
               failedUpload: transferFailedProducts,
            },
            prices: {
               retrieved: transferRetrievedPrices,
               unfound: transferUnfoundPrices,
               uploaded: transferUploadedPrices,
               failedUpload: transferFailedPrices,
            }
         },
         tour: {
            tourData,
            products: {
               retrieved: tourRetrievedProducts,
               unfound: tourUnfoundProducts,
               uploaded: tourUploadedProducts,
               failedUpload: tourFailedProducts,
            },
            prices: {
               retrieved: tourRetrievedPrices,
               unfound: tourUnfoundPrices,
               uploaded: tourUploadedPrices,
               failedUpload: tourFailedPrices,
            }
         }
      });
   } catch (err) {
      console.log(err.message);

      res.status(500).send({ error: err.message });
   }
}