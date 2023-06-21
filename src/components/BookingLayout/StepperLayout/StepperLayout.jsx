import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Form, useFormikContext } from 'formik';
import React, { useCallback } from 'react';
import StepButtons from './StepButtons/StepButtons';
import StepperProgressBar from './Elements/StepperProgressBar';
import useStepperData from './hooks/useStepperData';
import useFormValues from '@hooks/useFormValues';
import useUrlCheck from '@hooks/useUrlCheck';

function StepperLayout({ setCookie, cookieData }) {
  const {
    values: { bookingStep },
    setTouched,
    setValues,
  } = useFormikContext();

  const formReset = useCallback(() => {
    setTouched({});
    setValues(cookieData);
  }, [cookieData, setTouched, setValues]);

  useUrlCheck(formReset);

  const { activeStepComponent, activeStepLink } = useStepperData(bookingStep);

  useFormValues(setCookie);

  return (
    <Stack justifyContent="space-between">
      <StepperProgressBar activeStep={bookingStep} />
      <Box
        sx={{
          my: 3,
          minHeight: '20vh',
          width: '90%',
          alignSelf: 'center',
        }}
      >
        <Form>{React.cloneElement(activeStepComponent)}</Form>
      </Box>
      <StepButtons />
    </Stack>
  );
}

export default React.memo(StepperLayout);
