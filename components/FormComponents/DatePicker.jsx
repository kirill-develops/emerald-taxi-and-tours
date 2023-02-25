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
          name="arrive"
          label="Arrival Date & Time"
          value={values.arrive}
          onChange={(date) => {
            setFieldValue('arrive', date);
          }}
          onBlur={handleBlur('arrive')}
          disabled={values.transferType === 'departure'}
          renderInput={(props) => <TextField {...props} />}
          maxDateTime={values.depart}
          disablePast
        />
        <Typography variant="body1">To</Typography>
        <DateTimePicker
          name="depart"
          label="Departure Date & Time"
          value={values.depart}
          onChange={(date) => setFieldValue('depart', date)}
          onBlur={handleBlur('depart')}
          disabled={values.transferType === 'arrival'}
          renderInput={(props) => <TextField {...props} />}
          minDateTime={values.arrive}
        />
      </LocalizationProvider>
    </Stack>
  );
}

export default DatePicker;
