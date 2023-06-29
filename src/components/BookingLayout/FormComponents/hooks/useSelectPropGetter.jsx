import Typography from '@mui/material/Typography';
import React from 'react';
import { useFormikContext } from 'formik';
import useStepperData from '../../StepperLayout/hooks/useStepperData';
import useFieldSizeGetter from './useFieldSizeGetter';

export default function useSelectPropGetter(
  valueName = '',
  inputLabel = '',
  renderValue,
) {
  const { values, handleChange, handleBlur } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const size = useFieldSizeGetter();

  const getRenderValue = (selected) => (
    <Typography as="span">{selected}</Typography>
  );

  const renderValueProp = renderValue || getRenderValue;

  return {
    label: inputLabel,
    name: `${stepName}.${valueName}`,
    value: values[stepName]?.[valueName],
    onChange: handleChange,
    onBlur: handleBlur,
    size: size,
    renderValue: renderValueProp,
  };
}
