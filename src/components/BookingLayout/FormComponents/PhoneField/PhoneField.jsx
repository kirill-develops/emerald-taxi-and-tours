import InputAdornment from '@mui/material/InputAdornment';
import React from 'react';
import FormTextField from '@elements/FormTextField';
import CountriesInputAdornment from './CountriesInputAdornment/CountriesInputAdornment';
import useStepperData from '../../StepperLayout/hooks/useStepperData';

const phoneFieldStyles = {
  flexGrow: 1,
  '& .MuiInputBase-root': { pl: 0 },
};

const phoneFieldInputProps = {
  startAdornment: (
    <InputAdornment position="start">
      <CountriesInputAdornment />
    </InputAdornment>
  ),
};

const FormPhoneField = ({ label, value, onChange, sx, ...rest }) => {
  const { activeStepUrl: stepName } = useStepperData();

  return (
    <FormTextField
      stepName={stepName}
      fieldName="mobile"
      label="Mobile Phone Number"
      type="tel"
      margin="normal"
      sx={{ ...phoneFieldStyles, ...sx }}
      mobileNumber
      InputProps={phoneFieldInputProps}
      {...rest}
    />
  );
};

export default FormPhoneField;
