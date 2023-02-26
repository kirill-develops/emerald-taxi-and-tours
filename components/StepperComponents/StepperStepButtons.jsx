import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useFormikContext } from 'formik';

function StepperStepButtons({ handleBackClick, handleNextClick, isLastStep }) {
  const { values, submitForm } = useFormikContext();
  const { bookingStep } = values;

  return (
    <Stack
      spacing={3}
      direction="row"
      justifyContent="flex-end"
    >
      <Button
        onClick={() => handleBackClick(bookingStep - 1)}
        disabled={bookingStep === 0}
        variant="outlined"
      >
        Prev
      </Button>
      <Button
        onClick={
          isLastStep ? submitForm : () => handleNextClick(bookingStep + 1)
        }
        variant="contained"
      >
        {isLastStep ? 'Submit' : 'Next'}
      </Button>
    </Stack>
  );
}

export default React.memo(StepperStepButtons);
