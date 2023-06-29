import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Typography from '@mui/material/Typography';
import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import usePickerProps from './hooks/usePickerProps';

export default React.memo(function TransferDatePicker() {
  const arriveProps = usePickerProps('arrive');
  const departProps = usePickerProps('depart');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormInputStack sx={{ rowGap: 1, width: '100%' }}>
        <DateTimePicker {...arriveProps} />
        <Typography
          variant="h6"
          sx={{ alignSelf: 'center' }}
        >
          To
        </Typography>
        <DateTimePicker {...departProps} />
      </FormInputStack>
    </LocalizationProvider>
  );
});
