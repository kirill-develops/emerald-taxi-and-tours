import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useFormikContext } from 'formik';
import React from 'react';
import BookingStepper from './Elements/BookingStepper';
import useStepperLabels from './hooks/useStepperLabels';

function getLabel(index, text, activeStep) {
  if (activeStep >= index) {
    return text;
  }
}

export default React.memo(function ProgressBar(props) {
  const stepperLabels = useStepperLabels();

  const {
    values: { bookingStep },
  } = useFormikContext();

  return (
    <BookingStepper
      activeStep={bookingStep}
      {...props}
    >
      {stepperLabels.map(({ label }, index) => {
        const labelString = getLabel(index, label, bookingStep);

        return (
          <Step key={label}>
            <StepLabel>{labelString}</StepLabel>
          </Step>
        );
      })}
    </BookingStepper>
  );
});
