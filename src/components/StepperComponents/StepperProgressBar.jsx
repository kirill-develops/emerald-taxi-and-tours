import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import React from 'react';

import { useTransferDataByKey } from '@data/transferFormData';

function StepperProgressBar({ activeStep }) {
  const transferLabels = useTransferDataByKey('label');

  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
    >
      {transferLabels.map(({ label }, index) => (
        <Step key={label}>
          <StepLabel>{activeStep >= index && label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default React.memo(StepperProgressBar);
