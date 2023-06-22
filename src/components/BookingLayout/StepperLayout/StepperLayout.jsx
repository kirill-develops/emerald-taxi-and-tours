import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Form, useFormikContext } from 'formik';
import React from 'react';
import StepButtons from './StepButtons/StepButtons';
import StepperProgressBar from './ProgressBar/ProgressBar';
import useStepperData from './hooks/useStepperData';
import useSaveFormToCookie from './hooks/useSaveFormToCookie';
import { styled } from '@mui/material';
import useFormReset from './hooks/useFormReset';

const StepLayoutBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    my: 3,
    minHeight: '20vh',
    width: '90%',
    alignSelf: 'center',
  }),
);

export default React.memo(function StepperLayout({}) {
  const {
    values: { bookingStep },
  } = useFormikContext();

  const formReset = useFormReset();

  const { activeStepComponent } = useStepperData(bookingStep);

  useSaveFormToCookie();

  return (
    <Stack justifyContent="space-between">
      <StepperProgressBar />
      <StepLayoutBox>
        <Form>{React.cloneElement(activeStepComponent)}</Form>
      </StepLayoutBox>
      <StepButtons />
    </Stack>
  );
});
