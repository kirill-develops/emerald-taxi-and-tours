import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';
import FormInputStack from '@elements/FormInputStack';

function TourDatePicker({ stepName }) {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const handleDateChange = useCallback(
    (fieldName, date) => {
      setFieldValue(fieldName, date);
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
          value={values[stepName]?.date}
          onChange={(date) => handleDateChange(`${stepName}.date`, date)}
          renderInput={(props) => (
            <TextField
              {...props}
              onBlur={() => setFieldTouched(`${stepName}.date`, true, false)}
              helperText={errors[stepName]?.date}
              error={touched[stepName]?.date && Boolean(errors[stepName]?.date)}
              required
              fullWidth
            />
          )}
          disablePast
        />
        <TimePicker
          name={`${stepName}.time`}
          label="Select Tour Date & Time"
          views={['hours', 'minutes']}
          value={values[stepName]?.time}
          onChange={(time) => handleDateChange(`${stepName}.time`, time)}
          renderInput={(props) => (
            <TextField
              {...props}
              onBlur={() => setFieldTouched(`${stepName}.time`, true, false)}
              helperText={errors[stepName]?.time}
              error={Boolean(errors[stepName]?.time)}
              required
              fullWidth
            />
          )}
          disablePast
        />
      </FormInputStack>
    </LocalizationProvider>
  );
}

export default TourDatePicker;
