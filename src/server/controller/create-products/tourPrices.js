const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export function processTourPrices({
   name: destinationName,
   link: destinationLink,
   areaLink,
   price
}) {
   return price.map(
      ({
         name: priceName,
         link: priceLink,
         price: value
      }) => (
         {
            name: `${destinationName} transfer from ${priceName}`,
            value,
            id: `price_${areaLink}_${destinationLink}_${priceLink}`,
            productId: `tour_${areaLink}_${destinationLink}`
         }
      )
   )
}

export async function createStripeTourPrice({ name, productId, value, id: lookup_key, ...rest }) {
   const priceInCents = value * 100;

   try {
      const stripePrice = await stripe.prices.create({
         product: productId,
         unit_amount: priceInCents,
         currency: 'usd',
         nickname: name,
         lookup_key,
         metadata: { ...rest }
      })

      return stripePrice;
   } catch (err) {
      console.log(err.message);

      return err;
   }
}
