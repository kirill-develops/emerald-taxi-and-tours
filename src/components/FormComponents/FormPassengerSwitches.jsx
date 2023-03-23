import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useFormikContext } from 'formik';
import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import useTransferPrice from '@hooks/useTransferPrice';

function getMenuItems(transferPrice, passengers, isChildMenu) {
  return Array.from({ length: passengers }, (_, index) => {
    const value = isChildMenu ? index : index + 1;

    const jsx = (
      <MenuItem
        value={value}
        key={index}
        sx={{ justifyContent: 'space-between' }}
      >
        <Typography as="span">{value}</Typography>
        <Typography as="span">
          {isChildMenu
            ? `-$${transferPrice * value}`
            : `+$${transferPrice * (index - 3)}`}
        </Typography>
      </MenuItem>
    );

    if (
      (isChildMenu && passengers && index < passengers - 4 && index === 0) ||
      (!isChildMenu && index >= 4)
    ) {
      return jsx;
    } else
      return (
        <MenuItem
          value={value}
          key={index}
        >
          {value}
        </MenuItem>
      );
  });
}

function FormPassengerSwitches() {
  const { values, handleChange, handleBlur, touched, errors } =
    useFormikContext();

  const transferPrice = useTransferPrice();

  const passangerMenuItems = getMenuItems(transferPrice, 20, false);

  const childMenuItems = getMenuItems(
    transferPrice,
    values?.flightDetails?.passengers,
    true,
  );

  return (
    <FormInputStack sx={{ width: '100%' }}>
      <FormControl
        fullWidth
        required
        error={
          touched?.flightDetails?.passengers &&
          Boolean(errors?.flightDetails?.passengers)
        }
      >
        <InputLabel># of Passengers</InputLabel>
        <Select
          label="# of Passengers"
          name="flightDetails.passengers"
          value={values?.flightDetails?.passengers}
          onChange={handleChange}
          onBlur={handleBlur}
          renderValue={(selected) => (
            <Typography as="span">{selected}</Typography>
          )}
        >
          {passangerMenuItems}
        </Select>
        <FormHelperText>
          {touched?.flightDetails?.passengers &&
            errors?.flightDetails?.passengers}
        </FormHelperText>
      </FormControl>
      <FormControl
        fullWidth
        error={
          touched?.flightDetails?.childPassengers &&
          Boolean(errors?.flightDetails?.childPassengers)
        }
      >
        <InputLabel># of Passengers under 12</InputLabel>
        <Select
          label="# of Passengers under 12"
          name="flightDetails.childPassengers"
          value={values?.flightDetails?.childPassengers}
          onChange={handleChange}
          onBlur={handleBlur}
          renderValue={(selected) => (
            <Typography as="span">{selected}</Typography>
          )}
        >
          {childMenuItems}
        </Select>
        <FormHelperText>
          {touched?.flightDetails?.childPassengers &&
            errors?.flightDetails?.childPassengers}
        </FormHelperText>
      </FormControl>
    </FormInputStack>
  );
}

export default FormPassengerSwitches;
