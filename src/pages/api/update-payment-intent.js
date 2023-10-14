const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
   try {
      const { paymentIntentId, ...fields } = req.body;

      const updatedPaymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
         ...fields
      })

      res.send({ ...updatedPaymentIntent });
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
}