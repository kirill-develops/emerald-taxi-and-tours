import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Typography from '@mui/material/Typography';
import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';
import FormInputStack from '@elements/FormInputStack';
import { transferStartDate } from '@data/formInitValues';

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
      <FormInputStack sx={{ rowGap: 1, width: '100%' }}>
        <DateTimePicker
          name={`${stepName}.arrive`}
          label="Arrival Date & Time"
          views={pickerViews}
          value={dayjs(values[stepName]?.arrive)}
          onChange={(date) => handleDateChange(`${stepName}.arrive`, date)}
          disabled={values[stepName]?.transferType === 'departure'}
          disablePast
          minDateTime={dayjs(transferStartDate)}
          maxDateTime={
            values[stepName]?.transferType === 'roundtrip'
              ? values[stepName]?.depart && dayjs(values[stepName]?.depart)
              : null
          }
          slotProps={{
            textField: {
              onBlur: () => setFieldTouched(`${stepName}.arrive`, true, false),
              helperText: errors[stepName]?.arrive,
              error:
                touched[stepName]?.arrive && Boolean(errors[stepName]?.arrive),
              required: values[stepName]?.transferType !== 'departure',
              fullWidth: true,
            },
          }}
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
          value={dayjs(values[stepName]?.depart)}
          onChange={(date) => handleDateChange(`${stepName}.depart`, date)}
          disabled={values[stepName]?.transferType === 'arrival'}
          minDateTime={
            values[stepName]?.transferType === 'roundtrip'
              ? values[stepName]?.arrive && dayjs(values[stepName]?.arrive)
              : null
          }
          slotProps={{
            textField: {
              onBlur: () => setFieldTouched(`${stepName}.depart`, true, false),
              helperText: errors[stepName]?.depart,
              error:
                touched[stepName]?.depart && Boolean(errors[stepName]?.depart),
              required: values[stepName]?.transferType !== 'arrival',
              fullWidth: true,
            },
          }}
          disablePast
        />
      </FormInputStack>
    </LocalizationProvider>
  );
}

export default TransferDatePicker;
