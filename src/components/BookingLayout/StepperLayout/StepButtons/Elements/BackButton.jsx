import Button from '@mui/material/Button';
import React from 'react';
import { useFormikContext } from 'formik';

export default React.memo(function BackButton({ handleBackClick, ...rest }) {
  const { values: { bookingStep } = {} } = useFormikContext();

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
