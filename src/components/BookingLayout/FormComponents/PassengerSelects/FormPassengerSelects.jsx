import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import FormHelperTextEl from '../Elements/FormHelperTextEl';
import usePropGetter from './hooks/usePassengerPropGetter';

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
    <FormInputStack>
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
