const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export function processTransferProducts(area) {
   const { name: areaName, link: areaLink, airport, airportLink } = area;

   return area.destinations.map(destination => ({
      name: destination.name,
      link: destination.link,
      price: destination.price,
      area: areaName,
      areaLink,
      airport,
      airportLink,
      type: 'transfer',
      id: `transfer_${airportLink}_${areaLink}_${destination.link}`,
      stripeId: destination.stripeId
   }));
}

export async function createStripeTransferProduct({ name, stripeId, price, ...rest }) {
   try {
      const statementDescriptor = `${name} Hotel Transfer`.slice(0, 21).replace(/'/g, '`')

      const stripeProduct = await stripe.products.create({
         name: name,
         id: stripeId,
         // default_price_data: {
         //    unit_amount_decimal: price.roudTrip,
         //    currency: 'usd',
         //    lookup_key: price.roundTripId
         // },
         metadata: { ...rest },
         statement_descriptor: statementDescriptor,
         expand: ['default_price']
      })

      return stripeProduct;
   } catch (err) {
      return err;
   }
}

export async function updateStripeTransferProduct(stripeId, updatedData) {
   try {
      const stripeProduct = await stripe.products.create(stripeId, { ...updatedData })

      return stripeProduct;
   } catch (err) {
      return err;
   }
}