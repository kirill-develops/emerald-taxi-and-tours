import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import { useFormikContext } from 'formik';
import useStepperData from '../../hooks/useStepperData';
import useStepperButtons from '../hooks/useStepperButtons';
import { BookingContext } from '../../../BookingLayout';

export default React.memo(function BackButton({ ...rest }) {
  const { values: { bookingStep } = {} } = useFormikContext();

  const setCookie = useContext(BookingContext);

  const { activeStepLink } = useStepperData(bookingStep);

  const { handleBackClick } = useStepperButtons(activeStepLink, setCookie);

  const isFirstStep = bookingStep === 0;

  return (
    <Button
      onClick={() => handleBackClick(bookingStep - 1)}
      disabled={isFirstStep}
      variant="outlined"
      {...rest}
    >
      Prev
    </Button>
  );
});
