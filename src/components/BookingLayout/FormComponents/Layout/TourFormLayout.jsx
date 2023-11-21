import React from 'react';
import FormPassengerSelects from '../PassengerSelects/FormPassengerSelects';
import DatePicker from '../TourDatePicker/TourDatePicker';
import TourAreaSelect from '../TourAreaSelect/TourAreaSelect';
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
