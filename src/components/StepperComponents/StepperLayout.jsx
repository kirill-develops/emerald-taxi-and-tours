import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Form, useFormikContext } from 'formik';
import React, { useCallback } from 'react';
import StepperStepButtons from './StepperStepButtons';
import StepperProgressBar from './StepperProgressBar';
import useStepperData from '@hooks/useStepperData';
import useFormValues from '@hooks/useFormValues';
import useUrlCheck from '@hooks/useUrlCheck';

function useStepperButtons(activeStepLink, setCookie) {
  const { validateForm, setFieldValue, setTouched } = useFormikContext();

  const handleBackClick = useCallback(
    (step) => {
      setFieldValue('bookingStep', step, false);
      setCookie({ bookingStep: step });
    },
    [setFieldValue, setCookie],
  );

  const handleNextClick = useCallback(
    async (step) => {
      const res = await validateForm();

      if (!res[activeStepLink]) {
        setFieldValue('bookingStep', step, false);
        setCookie({ bookingStep: step });
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
    [activeStepLink, setCookie, setFieldValue, setTouched, validateForm],
  );

  return { handleBackClick, handleNextClick };
}

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

  const { activeStepComponent, activeStepLink, stepperLength } =
    useStepperData(bookingStep);

  useFormValues(setCookie);

  const { handleBackClick, handleNextClick } = useStepperButtons(
    activeStepLink,
    setCookie,
  );

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
