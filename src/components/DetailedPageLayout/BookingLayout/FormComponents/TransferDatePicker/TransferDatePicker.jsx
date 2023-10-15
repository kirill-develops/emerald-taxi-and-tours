import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Typography from '@mui/material/Typography';
import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import usePickerProps from './hooks/usePickerProps';
import { styled } from '@mui/material/styles';

const StyledInputStack = styled(FormInputStack)(({ theme }) =>
  theme.unstable_sx({ rowGap: 1 }),
);

const typographyStyles = { alignSelf: 'center' };

function SeperatorText() {
  return (
    <Typography
      variant="h6"
      sx={typographyStyles}
    >
      To
    </Typography>
  );
}

export default React.memo(function TransferDatePicker() {
  const arriveProps = usePickerProps('arrive');
  const departProps = usePickerProps('depart');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledInputStack>
        <DateTimePicker {...arriveProps} />
        <SeperatorText />
        <DateTimePicker {...departProps} />
      </StyledInputStack>
    </LocalizationProvider>
  );
});
