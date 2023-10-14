import { useFormikContext } from 'formik';
import { useMemo } from 'react';
import useStepData from '@hooks/useStepData';

export default function useStepperData() {
  const {
    values: { bookingStep },
  } = useFormikContext();

  const stepsData = useStepData();

  const activeStepData = useMemo(
    () => stepsData[bookingStep],
    [stepsData, bookingStep],
  );

  const stepperLength = stepsData.length - 1;

  return useMemo(() => {
    const { link } = activeStepData;

    return {
      stepsData,
      bookingStep,
      activeStepData,
      activeStepUrl: link,
      stepperLength,
    };
  }, [activeStepData, bookingStep, stepsData, stepperLength]);
}
