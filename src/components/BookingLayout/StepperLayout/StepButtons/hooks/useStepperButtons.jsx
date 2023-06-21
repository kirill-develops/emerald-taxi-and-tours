import { useFormikContext } from 'formik';
import { useCallback } from 'react';

export default function useStepperButtons(activeStepLink, setCookie) {
  const { validateForm, setFieldValue, setTouched } = useFormikContext();

  const handleBackClick = useCallback(
    (step) => {
      setFieldValue('bookingStep', step, false);
      setCookie({ bookingStep: step });
    },
    [setFieldValue, setCookie],
  );

  const handleNextClick = useCallback(
    async (step) => {
      const res = await validateForm();

      if (!res[activeStepLink]) {
        setFieldValue('bookingStep', step, false);
        setCookie({ bookingStep: step });
      } else {
        const touchedValues = Object.keys(res[activeStepLink]).reduce(
          (acc, value) => {
            acc[value] = true;
            return acc;
          },
          {},
        );

        setTouched({ [activeStepLink]: touchedValues });
      }
    },
    [activeStepLink, setCookie, setFieldValue, setTouched, validateForm],
  );

  return { handleBackClick, handleNextClick };
}
