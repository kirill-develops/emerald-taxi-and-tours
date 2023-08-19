import Stack from '@mui/material/Stack';
import { Form } from 'formik';
import { styled } from '@mui/material';
import React from 'react';
import StripePayContext from '@context/StripePayContext';
import useFormReset from './hooks/useFormReset';
import usePathChangeEffect from '../hooks/usePathChangeEffect';
import useSaveFormToCookie from './hooks/useSaveFormToCookie';
import ActiveStepComponent from './Elements/ActiveStepComponent';
import StepButtons from './StepButtons/StepButtons';
import StepperProgressBar from './ProgressBar/ProgressBar';
import useStepperContextValue from './hooks/useStepperContextValue';

const StyledForm = styled(Form)(({ theme }) =>
  theme.unstable_sx({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: 3,
    minHeight: '20vh',
    maxWidth: theme.breakpoints.values.sm,
    width: '90%',
    alignSelf: 'center',
  }),
);

export default React.memo(function StepperLayout() {
  const formReset = useFormReset();
  usePathChangeEffect(formReset);
  useSaveFormToCookie();
  const contextValue = useStepperContextValue();

  return (
    <Stack justifyContent="space-between">
      <StepperProgressBar />
      <StripePayContext.Provider value={contextValue}>
        <StyledForm>
          <ActiveStepComponent />
        </StyledForm>
        <StepButtons />
      </StripePayContext.Provider>
    </Stack>
  );
});
