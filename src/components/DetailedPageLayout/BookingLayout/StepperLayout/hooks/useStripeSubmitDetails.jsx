import { useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import StripeContext from '@context/StripeContext';
import useBillingDetails from './useBillingDetails';

export default function useStripeSubmitDetails() {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethodId, setPaymentMethodId] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  const {
    paymentIntent: { id: paymentIntentId },
  } = useContext(StripeContext);
  const billingDetails = useBillingDetails();

  const handleError = (error) => {
    setIsLoading(false);
    setMessage(error.message);
  };

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      elements,
      params: {
        ...billingDetails,
      },
    });

    if (error?.type === 'card_error' || error?.type === 'validation_error') {
      handleError(error);
    } else if (error) {
      setMessage('An unexpected error occurred.');
    }

    if (paymentMethod?.id) {
      const res = await fetch('/api/update-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentIntentId: paymentIntentId,
          paymentMethodId: paymentMethod.id,
        }),
      });

      const updatedPaymentIntent = await res.json();

      if (updatedPaymentIntent?.id) {
        setPaymentMethodId(paymentMethod?.id);
      }
    }

    setIsLoading(false);
  };

  return { message, isLoading, paymentMethodId, handleSubmit };
}
