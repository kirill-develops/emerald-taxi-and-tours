import { useFormikContext } from 'formik';
import React from 'react';
import useStepperData from '../hooks/useStepperData';

export default React.memo(function ActiveStepComponent() {
  const {
    values: { bookingStep },
  } = useFormikContext();

  const { activeStepComponent } = useStepperData(bookingStep);

  return React.cloneElement(activeStepComponent);
});
