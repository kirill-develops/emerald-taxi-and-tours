import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import FormHelperTextEl from './Elements/FormHelperTextEl';
import useMenuItemGetter from './hooks/useMenuItemGetter';
import useSelectPropGetter from './hooks/useSelectPropGetter';
import useErrorGetter from './hooks/useErrorGetter';

function usePropGetter(valueName) {
  const menuItemKey = `${valueName}MenuItems`;
  const propKey = `${valueName}Props`;
  const errorKey = `${valueName}Errors`;

  const menuItems = useMenuItemGetter(valueName);
  const props = useSelectPropGetter(valueName);
  const errors = useErrorGetter(valueName);

  return { [menuItemKey]: menuItems, [propKey]: props, [errorKey]: errors };
}

export default React.memo(function FormPassengerSelects({}) {
  const { passengersErrors, passengersMenuItems, passengersProps } =
    usePropGetter('passengers');

  const {
    childPassengersErrors,
    childPassengersMenuItems,
    childPassengersProps,
  } = usePropGetter('childPassengers');

  return (
    <FormInputStack sx={{ width: '100%' }}>
      <FormControl
        fullWidth
        required
        error={passengersErrors}
      >
        <InputLabel># of Passengers</InputLabel>
        <Select {...passengersProps}>{passengersMenuItems}</Select>
        <FormHelperTextEl valueName="passengers" />
      </FormControl>
      <FormControl
        fullWidth
        error={childPassengersErrors}
      >
        <InputLabel># of Passengers under 12</InputLabel>
        <Select {...childPassengersProps}>{childPassengersMenuItems}</Select>
        <FormHelperTextEl valueName="childPassengers" />
      </FormControl>
    </FormInputStack>
  );
});
