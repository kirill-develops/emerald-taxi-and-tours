import React from 'react';
import FormPassengerSelects from '../PassengerSelects/FormPassengerSelects';
import DatePicker from '../Elements/TourDatePicker';
import TourAreaSelect from '../Elements/TourAreaSelect';
import { AccomTextField } from '../Elements/FormTextFields';

function FormTourDetails() {
  return (
    <>
      <DatePicker />
      <AccomTextField />
      <TourAreaSelect />
      <FormPassengerSelects />
    </>
  );
}

export default FormTourDetails;
