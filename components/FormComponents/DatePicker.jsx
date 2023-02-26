import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useFormikContext } from 'formik';

function DatePicker() {
  const { values, handleBlur, setFieldValue } = useFormikContext();

  return (
    <Stack
      spacing={3}
      direction="row"
      alignItems="center"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          name="flightDetails.arrive"
          label="Arrival Date & Time"
          value={values?.flightDetails?.arrive}
          onChange={(date) => {
            setFieldValue('flightDetails.arrive', date);
          }}
          onBlur={handleBlur('flightDetails.arrive')}
          disabled={values?.flightDetails?.transferType === 'departure'}
          renderInput={(props) => <TextField {...props} />}
          maxDateTime={values?.flightDetails?.depart}
          disablePast
        />
        <Typography variant="body1">To</Typography>
        <DateTimePicker
          name="flightDetails.depart"
          label="Departure Date & Time"
          value={values?.flightDetails?.depart}
          onChange={(date) => setFieldValue('flightDetails.depart', date)}
          onBlur={handleBlur('flightDetails.depart')}
          disabled={values?.flightDetails?.transferType === 'arrival'}
          renderInput={(props) => <TextField {...props} />}
          minDateTime={values?.flightDetails?.arrive}
        />
      </LocalizationProvider>
    </Stack>
  );
}

export default DatePicker;
