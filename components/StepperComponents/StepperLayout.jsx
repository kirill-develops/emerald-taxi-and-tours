import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Form, useFormikContext } from 'formik';
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';

import FormFlightDetails from '@Form/FormFlightDetails';
import FormPersonalDetails from '@Form/FormPersonalDetails';
import FormPaymentDetails from '@Form/FormPaymentDetails';
import FormConfirmDetails from '@Form/FormConfirmDetails';
import StepperStepButtons from './StepperStepButtons';
import StepperProgressBar from './StepperProgressBar';

function StepperLayout({ setCookie }) {
  const { values, setFieldValue } = useFormikContext();
  const [activeStep, setActiveStep] = useState(values.bookingStep || 0);

  const handleStepChange = useCallback(
    (step) => {
      setActiveStep(step);
    },
    [setActiveStep],
  );

  useEffect(() => {
    setFieldValue('bookingStep', activeStep, false);
  }, [activeStep, setFieldValue]);

  useEffect(() => {
    setCookie(values);
  }, [values, setCookie]);

  return (
    <Stack justifyContent="space-between">
      <StepperProgressBar activeStep={activeStep} />
      <Box
        sx={{
          my: 3,
          minHeight: '20vh',
          width: '90%',
          alignSelf: 'center',
        }}
      >
        <Form>
          {
            [
              <FormFlightDetails key={0} />,
              <FormPersonalDetails key={1} />,
              <FormPaymentDetails key={2} />,
              <FormConfirmDetails key={3} />,
            ][values.bookingStep]
          }
        </Form>
      </Box>
      <StepperStepButtons
        activeStep={activeStep}
        handleStepChange={handleStepChange}
      />
    </Stack>
  );
}

export default React.memo(StepperLayout);
