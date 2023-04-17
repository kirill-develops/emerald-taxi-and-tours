import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { FlagIcon } from 'react-flag-kit';
import { useFormikContext } from 'formik';
import React from 'react';

import { countries } from '@Data/countries';
import FormInputStack from '@elements/FormInputStack';
import FormTextField from '@elements/FormTextField';

const MuiFlagIcon = styled(FlagIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

function CountriesInputAdornment() {
  const formik = useFormikContext();
  const { values, handleChange, handleBlur } = formik;

  return (
    <Select
      name="personalDetails.country"
      value={values?.personalDetails?.country}
      onChange={handleChange}
      onBlur={handleBlur}
      renderValue={(selected) => (
        <MuiFlagIcon
          code={selected}
          alt={`${countries[selected].region} flag`}
        />
      )}
      sx={{
        fieldset: { borderColor: 'transparent !important' },
      }}
      autoWidth
    >
      {Object.values(countries)
        .sort((a, b) => a.region.localeCompare(b.region))
        .map(({ code, region }) => (
          <MenuItem
            key={code}
            value={code}
          >
            <MuiFlagIcon
              code={code}
              alt={`${region} flag`}
            />
            {region}
          </MenuItem>
        ))}
    </Select>
  );
}

const FormPhoneField = ({ label, value, onChange, ...rest }) => {
  return (
    <FormInputStack
      direction="row"
      sx={{ width: '100%', columnGap: 1 }}
    >
      <FormTextField
        stepName="personalDetails"
        fieldName="mobile"
        label="Mobile Phone Number"
        type="tel"
        sx={{ flexGrow: 1, '& .MuiInputBase-root': { pl: 0 } }}
        mobileNumber
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CountriesInputAdornment />
            </InputAdornment>
          ),
        }}
        {...rest}
      />
    </FormInputStack>
  );
};

export default FormPhoneField;
