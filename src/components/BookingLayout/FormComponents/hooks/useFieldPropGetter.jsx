import { useFormikContext } from 'formik';
import useStepperData from '../../StepperLayout/hooks/useStepperData';
import useFieldSizeGetter from './useFieldSizeGetter';
import { useMemo } from 'react';

export default function useFieldPropGetter(valueName = '', inputLabel = '') {
  const { values, handleChange, handleBlur } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const size = useFieldSizeGetter();

  return useMemo(
    () => ({
      label: inputLabel,
      name: `${stepName}.${valueName}`,
      value: values[stepName]?.[valueName],
      onChange: handleChange,
      onBlur: handleBlur,
      size: size,
    }),
    [handleBlur, handleChange, inputLabel, stepName, valueName, values, size],
  );
}
