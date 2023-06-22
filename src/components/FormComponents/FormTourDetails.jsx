import React from 'react';
import FormTextField from '@elements/FormTextField';
import FormPassengerSelects from './FormPassengerSelects';
import DatePicker from './TourDatePicker';
import TourAreaSelect from './TourAreaSelect';
import { useFormikContext } from 'formik';
import useStepperData from '../BookingLayout/StepperLayout/hooks/useStepperData';

function FormTourDetails() {
  const {
    values: { bookingStep },
  } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData(bookingStep);

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
