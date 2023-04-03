import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';
import FormInputStack from '@elements/FormInputStack';

function TourDatePicker() {
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
      <FormInputStack sx={{ width: 'fit-content' }}>
        <DatePicker
          name="tourDetails.date"
          label="Select Tour Date & Time"
          views={['month', 'day']}
          value={values?.tourDetails?.date}
          onChange={(date) => handleDateChange('tourDetails.date', date)}
          renderInput={(props) => (
            <TextField
              {...props}
              onBlur={() => setFieldTouched('tourDetails.date', true, false)}
              helperText={errors?.tourDetails?.date}
              error={
                touched?.tourDetails?.date && Boolean(errors?.tourDetails?.date)
              }
              required
            />
          )}
          disablePast
        />
        <TimePicker
          name="tourDetails.time"
          label="Select Tour Date & Time"
          views={['hours', 'minutes']}
          value={values?.tourDetails?.time}
          onChange={(time) => handleDateChange('tourDetails.time', time)}
          renderInput={(props) => (
            <TextField
              {...props}
              onBlur={() => setFieldTouched('tourDetails.time', true, false)}
              helperText={errors?.tourDetails?.time}
              error={Boolean(errors?.tourDetails?.time)}
              required
            />
          )}
          disablePast
        />
      </FormInputStack>
    </LocalizationProvider>
  );
}

export default TourDatePicker;
