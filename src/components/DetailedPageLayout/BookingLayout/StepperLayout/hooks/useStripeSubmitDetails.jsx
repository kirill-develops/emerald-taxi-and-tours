import { useElements, useStripe } from '@stripe/react-stripe-js';
import { useCallback, useContext, useMemo, useState } from 'react';
import StripeContext from '@context/StripeContext';
import useBillingDetails from './useBillingDetails';
import { useFormikContext } from 'formik';

export default function useStripeSubmitDetails() {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethodId, setPaymentMethodId] = useState(null);
  const { values: { personalDetails: { email } = {} } = {} } =
    useFormikContext();

  const stripe = useStripe();
  const elements = useElements();

  const {
    paymentIntent: { id: paymentIntentId },
  } = useContext(StripeContext);
  const billingDetails = useBillingDetails();

  const handleError = (error) => {
    setMessage(error.message);
  };

  const handleSubmit = useCallback(
    async (callback) => {
      if (!stripe || !elements) {
        return;
      }

      setIsLoading(true);

      try {
        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
          handleError(submitError);
          console.log('object', submitError?.message);
          return;
        } else {
          setMessage(null);
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
          elements,
          params: {
            ...billingDetails,
          },
        });

        if (
          error?.type === 'card_error' ||
          error?.type === 'validation_error'
        ) {
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
              payment_method: paymentMethod.id,
              receipt_email: email,
            }),
          });

          const updatedPaymentIntent = await res.json();

          if (updatedPaymentIntent?.id) {
            setPaymentMethodId(paymentMethod?.id);

            callback();
          }
        }
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [billingDetails, elements, paymentIntentId, stripe, email],
  );

  return useMemo(
    () => ({ message, isLoading, paymentMethodId, handleSubmit }),
    [message, isLoading, paymentMethodId, handleSubmit],
  );
}
