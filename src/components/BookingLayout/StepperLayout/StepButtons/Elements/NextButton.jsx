import Button from '@mui/material/Button';
import React from 'react';
import { useFormikContext } from 'formik';
import useStepperData from '../../hooks/useStepperData';

export default React.memo(function NextButton({ handleNextClick, ...rest }) {
  const { values: { bookingStep } = {}, submitForm } = useFormikContext();

  const { stepperLength } = useStepperData(bookingStep);

  const isLastStep = stepperLength === bookingStep;

  const clickValue = isLastStep
    ? submitForm
    : () => handleNextClick(bookingStep + 1);

  const buttonScript = isLastStep ? 'Submit' : 'Next';

  return (
    <Button
      onClick={clickValue}
      variant="contained"
      {...rest}
    >
      {buttonScript}
    </Button>
  );
});
