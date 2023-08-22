import { useStripe } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import StripeContext from '@context/StripeContext';
import { useRouter } from 'next/router';

export default function useStripeConfirmPayment(paymentMethodId) {
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState();

  const stripe = useStripe();
  const { clientSecret, paymentIntent } = useContext(StripeContext);

  const router = useRouter();
  const currentUrl = router.asPath;

  const handleSubmit = async (event) => {
    if (!stripe) {
      return;
    }

    setLoading(true);

    try {
      const { error } = await stripe.confirmPayment({
        clientSecret,
        confirmParams: {
          payment_method: paymentMethodId,
          return_url: `http://localhost:3000${currentUrl}?session_id=${paymentIntent.id}`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
      }

      setLoading(false);
    } catch (err) {
      setErrorMessage(err);
      setLoading(false);
    }
  };

  return { errorMessage, loading, handleSubmit };
}
