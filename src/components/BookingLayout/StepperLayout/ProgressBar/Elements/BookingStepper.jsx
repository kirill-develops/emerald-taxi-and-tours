import Stepper from '@mui/material/Stepper';

import React from 'react';

export default React.memo(function BookingStepper({
  activeStep,
  children,
  ...rest
}) {
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      {...rest}
    >
      {children}
    </Stepper>
  );
});
