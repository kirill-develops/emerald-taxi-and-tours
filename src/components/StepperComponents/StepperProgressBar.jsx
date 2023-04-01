import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import React, { useCallback } from 'react';
import useStepperData from '@hooks/useStepperData';

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
    <Stepper
      activeStep={activeStep}
      alternativeLabel
    >
      {stepperLabels.map(({ label }, index) => (
        <Step key={label}>
          <StepLabel>{getLabel(index, label)}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default React.memo(StepperProgressBar);
