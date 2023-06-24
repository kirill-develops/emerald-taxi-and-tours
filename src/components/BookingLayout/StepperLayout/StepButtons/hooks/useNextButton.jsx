import { useFormikContext } from 'formik';
import { useCallback, useContext } from 'react';
import { BookingContext } from '../../../BookingLayout';
import useStepperData from '../../hooks/useStepperData';

export default function useNextButton() {
  const {
    setFieldValue,
    validateForm,
    setTouched,
    submitForm,
    values: { bookingStep },
  } = useFormikContext();

  const { setCookie } = useContext(BookingContext);

  const { activeStepUrl, stepperLength } = useStepperData();

  const isLastStep = stepperLength === bookingStep;

  const handleNextClick = useCallback(
    async (step) => {
      const res = await validateForm();

      if (!res[activeStepUrl]) {
        setFieldValue('bookingStep', step, false);
        setCookie({ bookingStep: step });
      } else {
        const touchedValues = Object.keys(res[activeStepUrl]).reduce(
          (acc, value) => {
            acc[value] = true;
            return acc;
          },
          {},
        );

        setTouched({ [activeStepUrl]: touchedValues });
      }
    },
    [activeStepUrl, setCookie, setFieldValue, setTouched, validateForm],
  );

  return {
    handleNextClick: isLastStep
      ? submitForm
      : () => handleNextClick(bookingStep + 1),
    buttonScript: isLastStep ? 'Submit' : 'Next',
  };
}
