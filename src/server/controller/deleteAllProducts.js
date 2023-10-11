const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function deleteProductFromStripe(productId) {
   try {
      await stripe.products.del(productId);
      return { productId, status: 'deleted' };
   } catch (error) {
      return { productId, status: 'failed', error };
   }
}

const products = await stripe.products.list();

async function asyncMapWithConcurrency(arr, asyncFn) {
   const concurrencyLimit = 20;
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

const deletionResults = await asyncMapWithConcurrency(
   products.data.map(({ id }) => id),
   deleteProductFromStripe
)

const successfullyDeleted = deletionResults.filter((result) => result.status === 'deleted');

const failedDeletions = deletionResults.filter((result) => result.status !== 'deleted');


console.log(successfullyDeleted, failedDeletions);