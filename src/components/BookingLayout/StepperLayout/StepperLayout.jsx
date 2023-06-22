import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Form } from 'formik';
import React from 'react';
import StepButtons from './StepButtons/StepButtons';
import StepperProgressBar from './ProgressBar/ProgressBar';
import useSaveFormToCookie from './hooks/useSaveFormToCookie';
import { styled } from '@mui/material';
import useFormReset from './hooks/useFormReset';
import usePathChangeEffect from '../hooks/usePathChangeEffect';
import ActiveStepComponent from './Elements/ActiveStepComponent';

const StepLayoutBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    my: 3,
    minHeight: '20vh',
    width: '90%',
    alignSelf: 'center',
  }),
);

export default React.memo(function StepperLayout({}) {
  const formReset = useFormReset();

  usePathChangeEffect(formReset);

  useSaveFormToCookie();

  return (
    <Stack justifyContent="space-between">
      <StepperProgressBar />
      <StepLayoutBox>
        <Form>
          <ActiveStepComponent />
        </Form>
      </StepLayoutBox>
      <StepButtons />
    </Stack>
  );
});
