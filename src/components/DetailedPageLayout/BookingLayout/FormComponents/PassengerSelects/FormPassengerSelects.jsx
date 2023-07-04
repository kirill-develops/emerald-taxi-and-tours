import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import FormHelperTextEl from '../Elements/FormHelperTextEl';
import usePropGetter from './hooks/usePassengerPropGetter';
import FormControlEl from '../Elements/FormControlEl';

export default React.memo(function FormPassengerSelects({}) {
  const { passengersMenuItems, passengersProps } = usePropGetter('passengers');

  const { childPassengersMenuItems, childPassengersProps } =
    usePropGetter('childPassengers');

  return (
    <FormInputStack>
      <FormControlEl
        fullWidth
        valueName="passengers"
      >
        <InputLabel># of Passengers</InputLabel>
        <Select {...passengersProps}>{passengersMenuItems}</Select>
        <FormHelperTextEl valueName="passengers" />
      </FormControlEl>
      <FormControlEl
        fullWidth
        valueName="childPassengers"
      >
        <InputLabel># of Passengers under 12</InputLabel>
        <Select {...childPassengersProps}>{childPassengersMenuItems}</Select>
        <FormHelperTextEl valueName="childPassengers" />
      </FormControlEl>
    </FormInputStack>
  );
});
