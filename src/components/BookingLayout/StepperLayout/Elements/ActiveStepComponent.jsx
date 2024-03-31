import React from 'react';
import useStepperData from '../hooks/useStepperData';

export default React.memo(function ActiveStepComponent() {
  const { activeStepData } = useStepperData();

  return React.cloneElement(activeStepData?.component);
});
