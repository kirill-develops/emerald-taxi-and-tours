import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';
import FormInputStack from '@elements/FormInputStack';
import { tourDate } from '@data/formInitValues';
import { capitalize } from '@helperFunctions';
import useStepperData from '../../StepperLayout/hooks/useStepperData';
import useFieldSizeGetter from '../hooks/useFieldSizeGetter';

function useSlotProps(type) {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const isDate = type === 'date';
  const views = isDate ? ['month', 'day'] : ['hours', 'minutes'];
  const value = dayjs(values[stepName]?.[type]);
  const minKey = isDate ? 'minDate' : 'minTime';

  const capitalizedType = capitalize(type);

  const handleDateChange = useCallback(
    (fieldName, date) => {
      setFieldValue(fieldName, dayjs(date).format());
      setFieldTouched(fieldName, true, false);
    },
    [setFieldValue, setFieldTouched],
  );

  const size = useFieldSizeGetter();

  return {
    name: `${stepName}.${type}`,
    label: `Select Tour ${capitalizedType}`,
    views: views,
    value: value,
    onChange: (value) => handleDateChange(`${stepName}.${type}`, value),
    minutesStep: 15,
    [minKey]: dayjs(tourDate),
    disablePast: true,
    slotProps: {
      textField: {
        onBlur: () => setFieldTouched(`${stepName}.date`, true, false),
        helperText: errors[stepName]?.[type],
        error: touched[stepName]?.[type] && Boolean(errors[stepName]?.[type]),
        required: true,
        fullWidth: true,
        size: size,
      },
    },
  };
}

function TourDatePicker({}) {
  const dateProps = useSlotProps('date');
  const timeProps = useSlotProps('time');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormInputStack sx={{ width: '100%' }}>
        <DatePicker {...dateProps} />
        <TimePicker {...timeProps} />
      </FormInputStack>
    </LocalizationProvider>
  );
}

export default TourDatePicker;
