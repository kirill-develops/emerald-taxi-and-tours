import Select from '@mui/material/Select';
import { useFormikContext } from 'formik';
import React from 'react';
import { MuiFlagIcon } from './Elements/MuiFlagIcon';
import useCountryFlags from './Elements/CountryFlags';

const selectStyles = {
  fieldset: { borderColor: 'transparent !important' },
};

export default function CountriesInputAdornment() {
  const { values, handleChange, handleBlur } = useFormikContext();

  const flagSelectItems = useCountryFlags();

  return (
    <Select
      name="personalDetails.country"
      value={values?.personalDetails?.country}
      onChange={handleChange}
      onBlur={handleBlur}
      renderValue={(selected) => <MuiFlagIcon selected={selected} />}
      sx={selectStyles}
      autoWidth
    >
      {flagSelectItems}
    </Select>
  );
}
