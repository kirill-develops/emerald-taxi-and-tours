import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import FormHelperTextEl from '../Elements/FormHelperTextEl';
import useMenuItemGetter from './hooks/useMenuItemGetter';
import useSelectPropGetter from './hooks/useSelectPropGetter';
import useErrorGetter from '../hooks/useErrorGetter';
import useFieldSizeGetter from '../hooks/useFieldSizeGetter';

function usePropGetter(valueName) {
  const menuItemKey = `${valueName}MenuItems`;
  const propKey = `${valueName}Props`;
  const errorKey = `${valueName}Errors`;

  const menuItems = useMenuItemGetter(valueName);
  const props = useSelectPropGetter(valueName);
  const errors = useErrorGetter(valueName);
  const size = useFieldSizeGetter();

  return {
    [menuItemKey]: menuItems,
    [propKey]: props,
    [errorKey]: errors,
    size,
  };
}

export default React.memo(function FormPassengerSelects({}) {
  const { passengersErrors, passengersMenuItems, passengersProps } =
    usePropGetter('passengers');

  const {
    childPassengersErrors,
    childPassengersMenuItems,
    childPassengersProps,
    size,
  } = usePropGetter('childPassengers');

  return (
    <FormInputStack sx={{ width: '100%' }}>
      <FormControl
        fullWidth
        required
        error={passengersErrors}
        size={size}
      >
        <InputLabel># of Passengers</InputLabel>
        <Select {...passengersProps}>{passengersMenuItems}</Select>
        <FormHelperTextEl valueName="passengers" />
      </FormControl>
      <FormControl
        fullWidth
        error={childPassengersErrors}
        size={size}
      >
        <InputLabel># of Passengers under 12</InputLabel>
        <Select {...childPassengersProps}>{childPassengersMenuItems}</Select>
        <FormHelperTextEl valueName="childPassengers" />
      </FormControl>
    </FormInputStack>
  );
});
