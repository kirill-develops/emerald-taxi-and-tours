import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import { useFormikContext } from 'formik';
import useStepperData from '../../hooks/useStepperData';
import useStepperButtons from '../hooks/useStepperButtons';
import { BookingContext } from '../../../BookingLayout';

export default React.memo(function NextButton({ ...rest }) {
  const { values: { bookingStep } = {}, submitForm } = useFormikContext();

  const setCookie = useContext(BookingContext);

  const { activeStepLink, stepperLength } = useStepperData(bookingStep);

  const { handleNextClick } = useStepperButtons(activeStepLink, setCookie);

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
