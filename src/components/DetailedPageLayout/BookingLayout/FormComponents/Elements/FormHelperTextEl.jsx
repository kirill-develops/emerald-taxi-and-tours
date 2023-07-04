import FormHelperText from '@mui/material/FormHelperText';
import { useFormikContext } from 'formik';
import React, { useMemo } from 'react';
import useStepperData from '../../StepperLayout/hooks/useStepperData';

export default function FormHelperTextEl({ valueName }) {
  const { touched, errors } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const errorString = useMemo(
    () => touched[stepName]?.[valueName] && errors[stepName]?.[valueName],
    [touched, stepName, errors, valueName],
  );

  return <FormHelperText>{errorString}</FormHelperText>;
}
