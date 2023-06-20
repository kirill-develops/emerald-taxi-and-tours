import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import React, { useCallback } from 'react';
import useStepperData from '../hooks/useStepperData';

function BookingStepper({ activeStep, children, ...rest }) {
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
    >
      {children}
    </Stepper>
  );
}

function StepperProgressBar({ activeStep }) {
  const { stepperLabels } = useStepperData();

  const getLabel = useCallback(
    (index, text) => {
      if (activeStep >= index) {
        return text;
      }
    },
    [activeStep],
  );

  return (
    <BookingStepper activeStep={activeStep}>
      {stepperLabels.map(({ label }, index) => (
        <Step key={label}>
          <StepLabel>{getLabel(index, label)}</StepLabel>
        </Step>
      ))}
    </BookingStepper>
  );
}

export default React.memo(StepperProgressBar);
