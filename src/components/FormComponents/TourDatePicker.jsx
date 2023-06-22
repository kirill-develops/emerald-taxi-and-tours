import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';
import FormInputStack from '@elements/FormInputStack';
import { tourDate } from '@data/formInitValues';

function TourDatePicker({ stepName }) {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const handleDateChange = useCallback(
    (fieldName, date) => {
      setFieldValue(fieldName, dayjs(date).format());
      setFieldTouched(fieldName, true, false);
    },
    [setFieldValue, setFieldTouched],
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormInputStack sx={{ width: '100%' }}>
        <DatePicker
          name={`${stepName}.date`}
          label="Select Tour Date & Time"
          views={['month', 'day']}
          value={dayjs(values[stepName]?.date)}
          onChange={(date) => handleDateChange(`${stepName}.date`, date)}
          minDate={dayjs(tourDate)}
          disablePast
          slotProps={{
            textField: {
              onBlur: () => setFieldTouched(`${stepName}.date`, true, false),
              helperText: errors[stepName]?.date,
              error: touched[stepName]?.date && Boolean(errors[stepName]?.date),
              required: true,
              fullWidth: true,
            },
          }}
        />
        <TimePicker
          name={`${stepName}.time`}
          label="Select Tour Date & Time"
          views={['hours', 'minutes']}
          value={dayjs(values[stepName]?.time)}
          onChange={(time) => handleDateChange(`${stepName}.time`, time)}
          minTime={dayjs(tourDate)}
          disablePast
          slotProps={{
            textField: {
              onBlur: () => setFieldTouched(`${stepName}.time`, true, false),
              helperText: errors[stepName]?.time,
              error: Boolean(errors[stepName]?.time),
              required: true,
              fullWidth: true,
            },
          }}
        />
      </FormInputStack>
    </LocalizationProvider>
  );
}

export default TourDatePicker;
