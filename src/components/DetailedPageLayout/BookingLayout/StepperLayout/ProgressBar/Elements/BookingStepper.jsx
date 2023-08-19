import Stepper from '@mui/material/Stepper';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useStepperData from '../../hooks/useStepperData';

function useBookingUrlModifier() {
  const router = useRouter();
  const { activeStepData } = useStepperData();

  useEffect(() => {
    if (window.location.hash !== `#${activeStepData.link}`) {
      router.push(`#${activeStepData.link}`, undefined, { shallow: true });
    }
  }, [activeStepData.link, router]);
}

export default React.memo(function BookingStepper({
  activeStep,
  children,
  ...rest
}) {
  useBookingUrlModifier();

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
