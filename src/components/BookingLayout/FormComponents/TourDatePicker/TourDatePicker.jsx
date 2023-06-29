import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import usePickerProps from './hooks/usePickerProps';

function TourDatePicker({}) {
  const dateProps = usePickerProps('date');
  const timeProps = usePickerProps('time');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormInputStack sx={{ width: '100%' }}>
        <DatePicker {...dateProps} />
        <TimePicker {...timeProps} />
      </FormInputStack>
    </LocalizationProvider>
  );
}

export default TourDatePicker;
