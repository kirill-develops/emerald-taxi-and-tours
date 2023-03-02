import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, from 'react';
import { useFormikContext } from 'formik';

function DatePicker() {
  const { values, errors, handleBlur, setFieldValue } = useFormikContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        spacing={3}
        direction="row"
        alignItems="stretch"
      >
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
          maxDateTime={values?.flightDetails?.depart}
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
          minDateTime={values?.flightDetails?.arrive}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default DatePicker;
