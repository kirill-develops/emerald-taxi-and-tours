import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useFormikContext } from 'formik';
import React, { useContext, useMemo } from 'react';
import { ParamContext } from '../FormContextProvider';
import useStepperData from '../../StepperLayout/hooks/useStepperData';

function useMenuItems() {
  const context = useContext(ParamContext);

  const JSX = context?.tourParams?.price?.map(({ link, name, price }) => (
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

function useSelectedItem(selected) {
  const context = useContext(ParamContext);

  return useMemo(
    () =>
      context?.tourParams?.price?.find((obj) => obj.link === selected)?.name,
    [selected, context?.tourParams?.price],
  );
}

function TourAreaSelect({}) {
  const inputLabel = 'Pickup: Area';

  const menuItemsJSX = useMenuItems();

  const { values, touched, errors, handleChange, handleBlur } =
    useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const selectedLabel = useSelectedItem(values[stepName]?.area);

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
        renderValue={() => <Typography as="span">{selectedLabel}</Typography>}
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
