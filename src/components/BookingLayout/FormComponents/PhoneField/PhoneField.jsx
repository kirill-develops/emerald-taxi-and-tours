import InputAdornment from '@mui/material/InputAdornment';
import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import FormTextField from '@elements/FormTextField';
import CountriesInputAdornment from './CountriesInputAdornment/CountriesInputAdornment';
import { styled } from '@mui/material';

const PhoneFieldStack = styled(FormInputStack)(({ theme }) =>
  theme.unstable_sx({ flexDirection: 'row', width: '100%', columnGap: 1 }),
);

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
  return (
    <PhoneFieldStack>
      <FormTextField
        stepName="personalDetails"
        fieldName="mobile"
        label="Mobile Phone Number"
        type="tel"
        sx={{ ...phoneFieldStyles, ...sx }}
        mobileNumber
        InputProps={phoneFieldInputProps}
        {...rest}
      />
    </PhoneFieldStack>
  );
};

export default FormPhoneField;
