const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export function processTransferPrices(area) {
   return area.destinations.flatMap(destination =>
      Object.entries(destination.price).map(([priceKey, value]) => {
         const { airportLink, link: areaLink } = area;
         const productId = `transfer_${airportLink}_${areaLink}_${destination.link}`

         return ({
            name: priceKey,
            value,
            areaLink: area.link,
            destinationLink: destination.link,
            id: `price_${area.link}_${destination.link}_${priceKey}`,
            productId
         })
      }).filter(price => Number.isFinite(price.value))
   );
}

export async function createStripeTransferPrice({ name, productId, value, id: lookup_key, ...rest }) {
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