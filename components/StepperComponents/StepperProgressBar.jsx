import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import React from 'react';

import { transferSteps } from '@data/transferFormData';

function StepperProgressBar({ activeStep }) {
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
    >
      {transferSteps.map((label, index) => (
        <Step key={label}>
          <StepLabel>{activeStep >= index && label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default React.memo(StepperProgressBar);
