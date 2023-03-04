import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useFormikContext } from 'formik';
import FormInputStack from '@elements/FormInputStack';

function DatePicker() {
  const { values, errors, handleBlur, setFieldValue } = useFormikContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormInputStack>
        <DateTimePicker
          name="flightDetails.arrive"
          label="Arrival Date & Time"
          value={values?.flightDetails?.arrive}
          onChange={(date) => setFieldValue('flightDetails.arrive', date)}
          disabled={values?.flightDetails?.transferType === 'departure'}
          renderInput={(props) => (
            <TextField
              {...props}
              onBlur={handleBlur}
              helperText={
                errors?.flightDetails?.arrive ||
                (values?.flightDetails?.transferType !== 'departure' &&
                  '* Required')
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
          onChange={(date) => setFieldValue('flightDetails.depart', date)}
          disabled={values?.flightDetails?.transferType === 'arrival'}
          renderInput={(props) => (
            <TextField
              {...props}
              onBlur={handleBlur}
              helperText={
                errors?.flightDetails?.depart ||
                (values?.flightDetails?.transferType !== 'arrival' &&
                  '* Required')
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
