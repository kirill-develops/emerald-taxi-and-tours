import Typography from '@mui/material/Typography';
import { useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import StripeContext from '@context/StripeContext';
import StripePayContext from '@context/StripePayContext';

const fetchSummary = async ({ setStripeSummary, paymentIntentId }) => {
  try {
    const res = await fetch('/api/summarize-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        payment_intent_id: paymentIntentId,
      }),
    });

    const data = await res.json();

    if (data?.error) {
      console.log(res, data.error);
    } else if (data?.data) {
      setStripeSummary(data.data);
    } else {
      console.log(res, data);
    }
  } catch (error) {
    console.error(error);
  }
};

function isString(variable) {
  return typeof variable === 'string';
}

export default React.memo(function FormConfirmDetails() {
  const [stripeSummary, setStripeSummary] = useState(null);
  const { paymentIntent } = useContext(StripeContext);
  const { message } = useContext(StripePayContext);
  const stripe = useStripe();

  useEffect(() => {
    if (paymentIntent.id && !stripeSummary) {
      fetchSummary({ setStripeSummary, paymentIntentId: paymentIntent.id });
    }
  }, [paymentIntent.id, stripeSummary]);

  useEffect(() => {
    return () => {
      setStripeSummary(null);
    };
  }, []);

function FormConfirmDetails() {
  return <div>FormConfirmDetails</div>;
}

export default FormConfirmDetails;
