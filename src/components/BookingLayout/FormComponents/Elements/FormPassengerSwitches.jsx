import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useFormikContext } from 'formik';
import React, { useMemo } from 'react';
import FormInputStack from '@elements/FormInputStack';
import useTransferPrice from '@hooks/useTransferPrice';

function getMenuItems(transferPrice, passengers, isChildMenu) {
  const menuItems = [];

  for (let index = 0; index < passengers; index++) {
    const value = isChildMenu ? index : index + 1;
    const price = isChildMenu
      ? -transferPrice * value
      : transferPrice * (index - 3);

    const jsx = (
      <MenuItem
        value={value}
        key={index}
        sx={{ justifyContent: 'space-between' }}
      >
        <Typography as="span">{value}</Typography>
        <Typography as="span">
          {`${price >= 0 ? '+' : '-'}$${Math.abs(price)}`}
        </Typography>
      </MenuItem>
    );

    if (
      (isChildMenu && index < passengers - 3 && index !== 0) ||
      (!isChildMenu && index >= 4)
    ) {
      menuItems.push(jsx);
    } else
      menuItems.push(
        <MenuItem
          value={value}
          key={index}
        >
          {value}
        </MenuItem>,
      );
  }

  return menuItems;
}

function FormPassengerSwitches() {
  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
  } = useFormikContext();

  const transferPrice = useTransferPrice();

  const passangerMenuItems = useMemo(
    () => getMenuItems(transferPrice, 20, false),
    [transferPrice],
  );

  const childMenuItems = useMemo(
    () => getMenuItems(transferPrice, values?.flightDetails?.passengers, true),
    [transferPrice, values?.flightDetails?.passengers],
  );

  const handlePassangerChange = (event) => {
    const {
      target: { value: targetValue },
    } = event;

    if (targetValue <= values.flightDetails.childPassengers) {
      setFieldValue('flightDetails.childPassengers', 0, true);
      setFieldTouched('flightDetails.childPassengers', true, false);
    }

    setFieldValue('flightDetails.passengers', targetValue, true);
    setFieldTouched('flightDetails.passengers', true, false);
  };

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
          onChange={handlePassangerChange}
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
