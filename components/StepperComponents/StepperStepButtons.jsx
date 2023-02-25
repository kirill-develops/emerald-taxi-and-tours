import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';
import { transferSteps } from '@data/transferFormData';
import { useFormikContext } from 'formik';

function StepperStepButtons({ activeStep, handleStepChange }) {
  const isLastStep = activeStep === transferSteps.length - 1;
  const { submitForm } = useFormikContext();

  return (
    <Stack
      spacing={3}
      direction="row"
      justifyContent="flex-end"
    >
      <Button
        onClick={() => handleStepChange(activeStep - 1)}
        disabled={activeStep === 0}
        variant="outlined"
      >
        Prev
      </Button>
      <Button
        onClick={
          isLastStep ? submitForm : () => handleStepChange(activeStep + 1)
        }
        variant="contained"
      >
        {isLastStep ? 'Submit' : 'Next'}
      </Button>
    </Stack>
  );
}

export default React.memo(StepperStepButtons);
