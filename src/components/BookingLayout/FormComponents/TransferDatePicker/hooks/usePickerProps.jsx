import dayjs from 'dayjs';
import { useFormikContext } from 'formik';
import { useCallback } from 'react';

import { transferStartDate } from '@data/formInitValues';
import { capitalize } from '@helperFunctions';
import useStepperData from '../../../StepperLayout/hooks/useStepperData';
import useFieldSizeGetter from '../../hooks/useFieldSizeGetter';
import useErrorGetter from '../../hooks/useErrorGetter';

const pickerViews = ['month', 'day', 'hours', 'minutes'];

export default function usePickerProps(valueName) {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const capitalizedType = capitalize(valueName);

  const value = dayjs(values[stepName]?.[valueName]);

  const isArrive = valueName === 'arrive';

  const required = isArrive ? 'departure' : 'arrival';

  const minDateTime =
    (isArrive && dayjs(transferStartDate)) ||
    (values[stepName]?.transferType === 'roundtrip' &&
      values[stepName]?.arrive &&
      dayjs(values[stepName]?.arrive)) ||
    null;

  const maxDateTime =
    (isArrive &&
      values[stepName]?.transferType === 'roundtrip' &&
      values[stepName]?.depart &&
      dayjs(values[stepName]?.depart)) ||
    null;

  const handleDateChange = useCallback(
    (fieldName, date) => {
      setFieldValue(fieldName, dayjs(date).format());
      setFieldTouched(fieldName, true, false);
    },
    [setFieldTouched, setFieldValue],
  );

  const size = useFieldSizeGetter();

  const errorValue = useErrorGetter(valueName);

  return {
    name: `${stepName}.${valueName}`,
    label: `${capitalizedType} Date & Time`,
    views: pickerViews,
    value: value,
    onChange: (value) => handleDateChange(`${stepName}.${valueName}`, value),
    disabled: required === values[stepName]?.transferType,
    disablePast: true,
    minDateTime: minDateTime,
    maxDateTime: maxDateTime,
    slotProps: {
      textField: {
        onBlur: () => setFieldTouched(`${stepName}.${valueName}`, true, false),
        helperText:
          touched[stepName]?.[valueName] && errors[stepName]?.[valueName],
        error: errorValue,
        required: required !== values[stepName]?.transferType,
        fullWidth: true,
        size: size,
      },
    },
  };
}
