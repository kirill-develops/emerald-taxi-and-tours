import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Form, useFormikContext } from 'formik';
import React, { useCallback } from 'react';
import StepperStepButtons from './StepperStepButtons';
import StepperProgressBar from './StepperProgressBar';
import useStepperData from '@hooks/useStepperData';
import useFormValues from '@hooks/useFormValues';

function useStepperButtons(activeStepLink) {
  const { validateForm, setFieldValue, setTouched } = useFormikContext();
  const handleBackClick = useCallback(
    (step) => setFieldValue('bookingStep', step, false),
    [setFieldValue],
  );

  const handleNextClick = useCallback(
    async (step) => {
      const res = await validateForm();

      if (!res[activeStepLink]) {
        setFieldValue('bookingStep', step, false);
      } else {
        const touchedValues = Object.keys(res[activeStepLink]).reduce(
          (acc, value) => {
            acc[value] = true;
            return acc;
          },
          {},
        );

        setTouched({ [activeStepLink]: touchedValues });
      }
    },
    [activeStepLink, setFieldValue, setTouched, validateForm],
  );

  return { handleBackClick, handleNextClick };
}

function StepperLayout({ setCookie }) {
  const {
    values: { bookingStep },
  } = useFormikContext();

  const { activeStepComponent, activeStepLink, stepperLength } =
    useStepperData(bookingStep);

  useFormValues(setCookie);

  const { handleBackClick, handleNextClick } =
    useStepperButtons(activeStepLink);

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
      <StepperStepButtons
        handleBackClick={handleBackClick}
        handleNextClick={handleNextClick}
        isLastStep={bookingStep === stepperLength}
      />
    </Stack>
  );
}

export default React.memo(StepperLayout);
