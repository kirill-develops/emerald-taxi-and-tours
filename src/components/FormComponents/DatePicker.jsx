import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useFormikContext } from 'formik';
import FormInputStack from '@elements/FormInputStack';

function DatePicker() {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const handleDateChange = (fieldName, date) => {
    setFieldValue(fieldName, date);
    setFieldTouched(fieldName, true, false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormInputStack sx={{ rowGap: 1 }}>
        <DateTimePicker
          name="flightDetails.arrive"
          label="Arrival Date & Time"
          value={values?.flightDetails?.arrive}
          onChange={(date) => handleDateChange('flightDetails.arrive', date)}
          disabled={values?.flightDetails?.transferType === 'departure'}
          renderInput={(props) => (
            <TextField
              {...props}
              onBlur={() =>
                setFieldTouched('flightDetails.arrive', true, false)
              }
              helperText={errors?.flightDetails?.arrive}
              required={values?.flightDetails?.transferType !== 'departure'}
              error={
                touched?.flightDetails?.arrive &&
                Boolean(errors?.flightDetails?.arrive)
              }
            />
          )}
          maxDateTime={
            values?.flightDetails?.transferType === 'roundtrip'
              ? values?.flightDetails?.depart
              : null
          }
          disablePast
        />
        <Typography
          variant="h6"
          sx={{ alignSelf: 'center' }}
        >
          To
        </Typography>
        <DateTimePicker
          name="flightDetails.depart"
          label="Departure Date & Time"
          value={values?.flightDetails?.depart}
          onChange={(date) => handleDateChange('flightDetails.depart', date)}
          disabled={values?.flightDetails?.transferType === 'arrival'}
          renderInput={(props) => (
            <TextField
              {...props}
              onBlur={() =>
                setFieldTouched('flightDetails.depart', true, false)
              }
              helperText={errors?.flightDetails?.depart}
              required={values?.flightDetails?.transferType !== 'arrival'}
              error={
                touched?.flightDetails?.depart &&
                Boolean(errors?.flightDetails?.depart)
              }
            />
          )}
          minDateTime={
            values?.flightDetails?.transferType === 'roundtrip'
              ? values?.flightDetails?.arrive
              : null
          }
          disablePast
        />
      </FormInputStack>
    </LocalizationProvider>
  );
}

export default DatePicker;
