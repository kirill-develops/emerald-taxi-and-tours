import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Typography from '@mui/material/Typography';
import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';
import FormInputStack from '@elements/FormInputStack';
import { transferStartDate } from '@data/formInitValues';
import { capitalize } from '@helperFunctions';
import useStepperData from '../../StepperLayout/hooks/useStepperData';
import useFieldSizeGetter from '../hooks/useFieldSizeGetter';

const pickerViews = ['month', 'day', 'hours', 'minutes'];

function usePickerProps(type) {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const capitalizedType = capitalize(type);

  const value = dayjs(values[stepName]?.[type]);

  const isArrive = type === 'arrive';

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

  return {
    name: `${stepName}.${type}`,
    label: `${capitalizedType} Date & Time`,
    views: pickerViews,
    value: value,
    onChange: (value) => handleDateChange(`${stepName}.${type}`, value),
    disabled: values[stepName]?.transferType === required,
    disablePast: true,
    minDateTime: minDateTime,
    maxDateTime: maxDateTime,
    slotProps: {
      textField: {
        onBlur: () => setFieldTouched(`${stepName}.${type}`, true, false),
        helperText: errors[stepName]?.[type],
        error: touched[stepName]?.[type] && Boolean(errors[stepName]?.[type]),
        required: values[stepName]?.transferType !== required,
        fullWidth: true,
        size: size,
      },
    },
  };
}

function TransferDatePicker() {
  const arriveProps = usePickerProps('arrive');
  const departProps = usePickerProps('depart');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormInputStack sx={{ rowGap: 1, width: '100%' }}>
        <DateTimePicker {...arriveProps} />
        <Typography
          variant="h6"
          sx={{ alignSelf: 'center' }}
        >
          To
        </Typography>
        <DateTimePicker {...departProps} />
      </FormInputStack>
    </LocalizationProvider>
  );
}

export default TransferDatePicker;
