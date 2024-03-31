import { useFormikContext } from 'formik';
import { useCallback, useContext } from 'react';
import BookingContext from '@context/BookingContext';
import useStepperData from '../../hooks/useStepperData';
import StripePayContext from '@context/StripePayContext';

export default function useNextButton() {
  const {
    setFieldValue,
    validateForm,
    setTouched,
    values: { bookingStep },
  } = useFormikContext();
  const { setCookie } = useContext(BookingContext);
  const { activeStepUrl, stepperLength } = useStepperData();
  const { isLoading, handleSubmit } = useContext(StripePayContext);

  const isLastStep = stepperLength === bookingStep;

  const handleNextClick = useCallback(
    async (step) => {
      const res = await validateForm();
      const formErrors = res[activeStepUrl];

      if (!formErrors) {
        setFieldValue('bookingStep', step, false);

        if (step !== 3) {
          setCookie({ bookingStep: step });
        }
      } else {
        const touchedValues = Object.keys(formErrors).reduce((acc, value) => {
          acc[value] = true;

          return acc;
        }, {});

        setTouched({ [activeStepUrl]: touchedValues });
      }
    },
    [activeStepUrl, setCookie, setFieldValue, setTouched, validateForm],
  );

  const buttonFunctionProvider = (bookingStep, stepperLength) => {
    if (bookingStep === stepperLength - 1) {
      return () => handleSubmit(() => handleNextClick(bookingStep + 1));
    } else if (bookingStep === stepperLength) {
      return handleSubmit;
    } else {
      return () => {
        handleNextClick(bookingStep + 1);
      };
    }
  };

  return {
    handleNextClick: buttonFunctionProvider(bookingStep, stepperLength),
    buttonScript: isLoading ? 'Loading' : isLastStep ? 'Confirm' : 'Next',
    isLoading: isLoading,
  };
}
