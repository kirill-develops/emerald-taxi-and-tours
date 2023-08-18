const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
   const { items } = req.body;

   const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      setup_future_usage: 'off_session',
      automatic_payment_methods: {
         enabled: true,
      },
   });

   res.send({
      ...paymentIntent,
   });

};



function calculateOrderAmount(items) {
   // Replace this constant with a calculation of the order's amount
   // Calculate the order total on the server to prevent
   // people from directly manipulating the amount on the client
   return 1400;
};
