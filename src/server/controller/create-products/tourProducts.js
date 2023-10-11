const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export function processTourProducts({ name, link, area, areaLink, type: tourTypes, price, stripeId }) {
   return {
      name,
      link,
      price,
      area,
      areaLink,
      tourTypes,
      type: 'tour',
      id: `tour_${areaLink}_${link}`,
      stripeId
   };
}

export async function createStripeTourProduct({ name, stripeId, price: priceArr, tourTypes, ...rest }) {
   try {
      const statementDescriptor = `${name} Tour Transfer`.slice(0, 21).replace(/'/g, '`');

      const stripeProduct = await stripe.products.create({
         name: name,
         id: stripeId,
         // default_price_data: {
         //    unit_amount_decimal: priceForStripeObj.price,
         //    currency: 'usd',
         //    lookup_key: priceForStripeObj.stripeId
         // },
         metadata: { ...rest },
         statement_descriptor: statementDescriptor,
         expand: ['default_price']
      })

      return stripeProduct;
   } catch (err) {
      console.log('createStripeTourProduct: ', err.message);

      return err;
   }
}