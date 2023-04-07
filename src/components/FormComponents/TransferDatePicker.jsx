import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';
import FormInputStack from '@elements/FormInputStack';
import { transferStartDate } from '@hooks/useFormInitialValues';
import dayjs from 'dayjs';

function TransferDatePicker({ stepName }) {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const handleDateChange = useCallback(
    (fieldName, date) => {
      setFieldValue(fieldName, dayjs(date).format());
      setFieldTouched(fieldName, true, false);
    },
    [setFieldTouched, setFieldValue],
  );

  const pickerViews = ['month', 'day', 'hours', 'minutes'];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormInputStack sx={{ rowGap: 1 }}>
        <DateTimePicker
          name={`${stepName}.arrive`}
          label="Arrival Date & Time"
          views={pickerViews}
          value={values[stepName]?.arrive}
          onChange={(date) => handleDateChange(`${stepName}.arrive`, date)}
          disabled={values[stepName]?.transferType === 'departure'}
          renderInput={(props) => (
            <TextField
              {...props}
              onBlur={() => setFieldTouched(`${stepName}.arrive`, true, false)}
              helperText={errors[stepName]?.arrive}
              required={values[stepName]?.transferType !== 'departure'}
              error={
                touched[stepName]?.arrive && Boolean(errors[stepName]?.arrive)
              }
            />
          )}
          minDateTime={dayjs(transferStartDate)}
          maxDateTime={
            values[stepName]?.transferType === 'roundtrip'
              ? values[stepName]?.depart && dayjs(values[stepName]?.depart)
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
          name={`${stepName}.depart`}
          label="Departure Date & Time"
          views={pickerViews}
          value={values[stepName]?.depart}
          onChange={(date) => handleDateChange(`${stepName}.depart`, date)}
          disabled={values[stepName]?.transferType === 'arrival'}
          renderInput={(props) => (
            <TextField
              {...props}
              onBlur={() => setFieldTouched(`${stepName}.depart`, true, false)}
              helperText={errors[stepName]?.depart}
              required={values[stepName]?.transferType !== 'arrival'}
              error={
                touched[stepName]?.depart && Boolean(errors[stepName]?.depart)
              }
            />
          )}
          minDateTime={
            values[stepName]?.transferType === 'roundtrip'
              ? values[stepName]?.arrive && dayjs(values[stepName]?.arrive)
              : null
          }
          disablePast
        />
      </FormInputStack>
    </LocalizationProvider>
  );
}

export default TransferDatePicker;
