import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useFormikContext } from 'formik';
import React, { useContext } from 'react';
import FormInputStack from '@elements/FormInputStack';
import useTransferPrice from '../hooks/useTransferPrice';
import { ParamContext } from '../FormContextProvider';
import useStepperData from '../../StepperLayout/hooks/useStepperData';
import { useMediaQuery } from '@mui/material';

function useMenuItems(transferPrice, passengers, isChildMenu) {
  const { type } = useContext(ParamContext);

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
      type === 'transfer' &&
      ((isChildMenu && index < passengers - 3 && index !== 0) ||
        (!isChildMenu && index >= 4))
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

function FormPassengerSelect({}) {
  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
  } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const transferPrice = useTransferPrice();

  const passangerMenuItems = useMenuItems(transferPrice, 20, false);

  const childMenuItems = useMenuItems(
    transferPrice,
    values[stepName]?.passengers,
    true,
  );

  const isMd = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const size = isMd ? 'medium' : 'small';

  const handlePassangerChange = (event) => {
    const {
      target: { value: targetValue },
    } = event;

    if (targetValue <= values[stepName]?.childPassengers) {
      setFieldValue(`${stepName}.childPassengers`, 0, true);
      setFieldTouched(`${stepName}.childPassengers`, true, false);
    }

    setFieldValue(`${stepName}.passengers`, targetValue, true);
    setFieldTouched(`${stepName}.passengers`, true, false);
  };

  return (
    <FormInputStack sx={{ width: '100%' }}>
      <FormControl
        fullWidth
        required
        error={
          touched[stepName]?.passengers && Boolean(errors[stepName]?.passengers)
        }
      >
        <InputLabel># of Passengers</InputLabel>
        <Select
          label="# of Passengers"
          name={`${stepName}.passengers`}
          value={values[stepName]?.passengers}
          onChange={handlePassangerChange}
          onBlur={handleBlur}
          size={size}
          renderValue={(selected) => (
            <Typography as="span">{selected}</Typography>
          )}
        >
          {passangerMenuItems}
        </Select>
        <FormHelperText>
          {touched[stepName]?.passengers && errors[stepName]?.passengers}
        </FormHelperText>
      </FormControl>
      <FormControl
        fullWidth
        error={
          touched[stepName]?.childPassengers &&
          Boolean(errors[stepName]?.childPassengers)
        }
      >
        <InputLabel># of Passengers under 12</InputLabel>
        <Select
          label="# of Passengers under 12"
          name={`${stepName}.childPassengers`}
          value={values[stepName]?.childPassengers}
          onChange={handleChange}
          onBlur={handleBlur}
          size={size}
          renderValue={(selected) => (
            <Typography as="span">{selected}</Typography>
          )}
        >
          {childMenuItems}
        </Select>
        <FormHelperText>
          {touched[stepName]?.childPassengers &&
            errors[stepName]?.childPassengers}
        </FormHelperText>
      </FormControl>
    </FormInputStack>
  );
}

export default FormPassengerSelect;
