import { useMemo } from 'react';
import useStepsDataByType from './useStepsDataByType';

export default function useStepperData() {
  const { stepsDataByType, bookingStep } = useStepsDataByType();

  const { link: activeStepUrl } = useMemo(
    () => stepsDataByType[bookingStep],
    [bookingStep, stepsDataByType],
  );

  const stepperLength = useMemo(
    () => stepsDataByType.length - 1,
    [stepsDataByType],
  );

  return useMemo(
    () => ({
      activeStepUrl,
      stepperLength,
    }),
    [activeStepUrl, stepperLength],
  );
}
