import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useFormikContext } from 'formik';
import React, { useContext } from 'react';
import { ParamContext } from './FormContextProvider';
import { capitalize } from '@helperFunctions';

function useMenuItems() {
  const context = useContext(ParamContext);

  const JSX = context?.tourParams?.price.map(({ link, name, price }) => (
    <MenuItem
      value={link}
      key={link}
      sx={{ justifyContent: 'space-between' }}
    >
      <Typography as="span">{name}</Typography>
      <Typography as="span">${price}</Typography>
    </MenuItem>
  ));

  return JSX;
}

function TourAreaSelect({ stepName }) {
  const inputLabel = 'Select Area Pickup';

  const menuItemsJSX = useMenuItems();

  const { values, touched, errors, handleChange, handleBlur } =
    useFormikContext();

  return (
    <FormControl
      fullWidth
      required
      error={touched[stepName]?.area && Boolean(errors[stepName]?.area)}
      margin="normal"
    >
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        label={inputLabel}
        name={`${stepName}.area`}
        value={values[stepName]?.area}
        onChange={handleChange}
        onBlur={handleBlur}
        renderValue={(selected) => (
          <Typography as="span">{capitalize(selected)}</Typography>
        )}
      >
        {menuItemsJSX}
      </Select>
      <FormHelperText>
        {touched[stepName]?.area && errors[stepName]?.area}
      </FormHelperText>
    </FormControl>
  );
}

export default TourAreaSelect;
