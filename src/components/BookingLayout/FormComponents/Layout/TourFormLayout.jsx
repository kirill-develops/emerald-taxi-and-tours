import React from 'react';
import FormTextField from '@elements/FormTextField';
import FormPassengerSelects from '../Elements/FormPassengerSelects';
import DatePicker from '../Elements/TourDatePicker';
import TourAreaSelect from '../Elements/TourAreaSelect';
import { useFormikContext } from 'formik';
import useStepperData from '../../StepperLayout/hooks/useStepperData';

function FormTourDetails() {
  const {
    values: { bookingStep },
  } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData(bookingStep);

  return (
    <>
      <DatePicker />
      <TourAreaSelect />
      <FormPassengerSelects />
    </>
  );
}

export default FormTourDetails;
