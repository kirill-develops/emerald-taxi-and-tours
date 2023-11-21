import { useFormikContext } from 'formik';
import { useMemo } from 'react';
import useStripeSubmitDetails from './useStripeSubmitDetails';
import useStripeConfirmPayment from './useStripeConfirmPayment';

export default function useStepperContextValue() {
  const { values } = useFormikContext();

  const {
    message,
    isLoading,
    paymentMethodId,
    handleSubmit: handleStripeDetails,
  } = useStripeSubmitDetails();

  const {
    errorMessage,
    loading,
    handleSubmit: handleConfirm,
  } = useStripeConfirmPayment(paymentMethodId);

  const detailsContextValue = useMemo(
    () => ({
      message,
      isLoading,
      handleSubmit: handleStripeDetails,
    }),
    [message, isLoading, handleStripeDetails],
  );

  const confirmContextValue = useMemo(
    () => ({
      message: errorMessage,
      isLoading: loading,
      paymentMethodId,
      handleSubmit: handleConfirm,
    }),
    [errorMessage, loading, handleConfirm, paymentMethodId],
  );

  const contextValue = useMemo(
    () =>
      values.bookingStep === 2 ? detailsContextValue : confirmContextValue,
    [values.bookingStep, detailsContextValue, confirmContextValue],
  );

  return contextValue;
}
