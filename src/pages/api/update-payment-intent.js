const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
   try {
      const { paymentIntentId, paymentMethodId } = req.body;

      const updatedPaymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
         payment_method: paymentMethodId,
      })

      res.send({ ...updatedPaymentIntent });
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
}