import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { memo, useContext, useEffect, useState } from 'react';
import StripeContext from '@context/StripeContext';
import useStripeElementsOptionsGetter from './hooks/useStripeElementsOptionsGetter';
import { ParamContext } from '@context/FormContextProvider';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

const fetchClientSecret = async ({
  type,
  link,
  setClientSecret,
  setPaymentIntent,
}) => {
  try {
    const res = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type,
        link,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      const { client_secret: clientSecret, ...paymentIntent } = data;

      if (clientSecret) {
        setClientSecret(clientSecret);
        setPaymentIntent(paymentIntent);
      } else {
        console.error('Error: no client secret found: ', data);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export default memo(function StripeElementsProvider({ children }) {
  const [clientSecret, setClientSecret] = useState(null);
  const [paymentIntent, setPaymentIntent] = useState(null);
  const { type, link } = useContext(ParamContext);

  useEffect(() => {
    if (!clientSecret) {
      fetchClientSecret({ type, link, setClientSecret, setPaymentIntent });
    }
  }, [clientSecret, link, type]);

  const stripeOptions = useStripeElementsOptionsGetter(clientSecret);

  return (
    clientSecret && (
      <Elements
        options={stripeOptions}
        stripe={stripePromise}
      >
        <StripeContext.Provider value={{ clientSecret, paymentIntent }}>
          {children}
        </StripeContext.Provider>
      </Elements>
    )
  );
});
