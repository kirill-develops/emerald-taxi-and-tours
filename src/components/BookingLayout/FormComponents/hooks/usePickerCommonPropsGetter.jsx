import { useFormikContext } from 'formik';
import dayjs from 'dayjs';
import { useCallback, useMemo } from 'react';
import useStepperData from '../../StepperLayout/hooks/useStepperData';
import useErrorGetter from './useErrorGetter';
import useFieldSizeGetter from './useFieldSizeGetter';

export default function usePickerCommonPropsGetter(valueName) {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const value = dayjs(values[stepName]?.[valueName]);
  const errorValue = useErrorGetter(valueName);
  const size = useFieldSizeGetter();

  const handleDateChange = useCallback(
    (fieldName, date) => {
      setFieldValue(fieldName, dayjs(date).format());
      setFieldTouched(fieldName, true, false);
    },
    [setFieldTouched, setFieldValue],
  );

  return useMemo(
    () => ({
      name: `${stepName}.${valueName}`,
      value: value,
      onChange: (value) => handleDateChange(`${stepName}.${valueName}`, value),
      disablePast: true,
      slotProps: {
        textField: {
          onBlur: () =>
            setFieldTouched(`${stepName}.${valueName}`, true, false),
          helperText:
            touched[stepName]?.[valueName] && errors[stepName]?.[valueName],
          error: errorValue,
          fullWidth: true,
          size: size,
        },
      },
    }),
    [
      value,
      stepName,
      valueName,
      errorValue,
      handleDateChange,
      errors,
      setFieldTouched,
      touched,
      size,
    ],
  );
}
