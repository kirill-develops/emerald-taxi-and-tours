import React from 'react';
import { useMemo } from 'react';
import useStepsDataByType from '../hooks/useStepsDataByType';

function useActiveStep() {
  const { stepsDataByType, bookingStep } = useStepsDataByType();

  const { component: activeStepComponent } = useMemo(
    () => stepsDataByType[bookingStep],
    [bookingStep, stepsDataByType],
  );

  return activeStepComponent;
}

export default React.memo(function ActiveStepComponent() {
  const activeStepComponent = useActiveStep();

  return React.cloneElement(activeStepComponent);
});
