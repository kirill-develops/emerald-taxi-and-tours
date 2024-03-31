const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
   try {
      if (!req?.body?.payment_intent_id) {
         res.status(400).json({ error: 'Client Secret is missing' })
      }

      const intent = await retrievePaymentIntent(req.body.payment_intent_id);
      const details = summarizePaymentIntent(intent);

      res.json({ data: details });
   } catch (err) {
      res.status(500).json({ error: `Error: ${err.message}` });
   }
};


async function retrievePaymentIntent(clientSecret) {
   try {
      return await stripe.paymentIntents.retrieve(clientSecret, {
         expand: ['payment_method']
      })
   } catch (err) {
      throw new Error(`something went wrong. Try again: ${err}`);
   }
};

function summarizePaymentIntent(intent) {
   if (!intent) {
      throw new Error('Invalid payment intent');
   };

   return {
      amount: intent.amount,
      currency: intent.currency,
      payment_method: intent.payment_method,
   };
}