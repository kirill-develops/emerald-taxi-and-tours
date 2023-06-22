import React from 'react';
import FormTextField from '@elements/FormTextField';
import FormPassengerSelects from './FormPassengerSelects';
import DatePicker from './TourDatePicker';
import TourAreaSelect from './TourAreaSelect';

function FormTourDetails() {
  const stepName = 'tourDetails';

  return (
    <>
      <DatePicker stepName={stepName} />
      <FormTextField
        stepName={stepName}
        fieldName="accomName"
        label="PickUp: Accomodation Name"
        margin="normal"
      />
      <TourAreaSelect stepName={stepName} />
      <FormPassengerSelects stepName={stepName} />
    </>
  );
}

export default FormTourDetails;
