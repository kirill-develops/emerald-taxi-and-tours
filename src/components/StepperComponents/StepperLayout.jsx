import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Form, useFormikContext } from 'formik';
import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import StepperStepButtons from './StepperStepButtons';
import StepperProgressBar from './StepperProgressBar';
import { transferSteps, tourSteps } from '@data/stepperData';
import { ParamContext } from '@Form/FormContextProvider';

function StepperLayout({ cookieData, setCookie }) {
  const { values, validateForm, setFieldValue, setTouched } =
    useFormikContext();

  const { bookingStep } = values;

  const context = useContext(ParamContext);

  const { component: activeStepComponent, link: activeStepLink } =
    context.type === 'transfer'
      ? transferSteps[bookingStep]
      : tourSteps[bookingStep];

  const stepperLength = useMemo(
    () =>
      context.type === 'transfer'
        ? transferSteps.length - 1
        : tourSteps.length - 1,
    [context.type],
  );

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

  useEffect(() => {
    setCookie(values);
  }, [values, cookieData, setCookie]);

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
