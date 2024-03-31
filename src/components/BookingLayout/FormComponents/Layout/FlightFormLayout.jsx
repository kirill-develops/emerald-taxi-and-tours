import React from 'react';
import DatePicker from '../TransferDatePicker/TransferDatePicker';
import FormInputStack from '@elements/FormInputStack';
import FormPassengerSelects from '../PassengerSelects/FormPassengerSelects';
import RoundTripRadio from '../Elements/RoundTripRadio';
import {
  AccomTextField,
  AirlineTextField,
  FlightNumTextField,
} from '../Elements/FormTextFields';

export default React.memo(function FormFlightDetails() {
  return (
    <>
      <RoundTripRadio />
      <FormInputStack>
        <AirlineTextField />
        <FlightNumTextField />
      </FormInputStack>
      <DatePicker />
      <AccomTextField />
      <FormPassengerSelects />
    </>
  );
});
