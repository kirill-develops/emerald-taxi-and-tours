import React, { useContext } from 'react';
import DatePicker from '@Form/TransferDatePicker';
import RoundTripRadio from '@Form/RoundTripRadio';
import FormInputStack from '@elements/FormInputStack';
import FormTextField from '@elements/FormTextField';
import FormPassengerSelects from './FormPassengerSelects';
import { ParamContext } from './FormContextProvider';
import { useFormikContext } from 'formik';
import useStepperData from '../BookingLayout/StepperLayout/hooks/useStepperData';

function useAccomDisabledHandler() {
  const {
    areaParams: { link: areaLink },
    transferParams: { link: transferLink },
  } = useContext(ParamContext);

  return transferLink !== 'other' && areaLink !== 'other_areas';
}

const textFieldInputProps = {
  step: 1,
  inputMode: 'numeric',
};

export default React.memo(function FormFlightDetails() {
  const {
    values: { bookingStep },
  } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData(bookingStep);

  const isAccomDisabled = useAccomDisabledHandler();

  return (
    <>
      <RoundTripRadio stepName={stepName} />
      <FormInputStack sx={{ width: '100%' }}>
        <FormTextField
          stepName={stepName}
          fieldName="airline"
          label="Airline"
        />
        <FormTextField
          stepName={stepName}
          fieldName="flightNum"
          label="Flight Number"
          type="tel"
          second
          inputProps={textFieldInputProps}
        />
      </FormInputStack>
      <DatePicker stepName={stepName} />
      <FormTextField
        stepName={stepName}
        fieldName="accomName"
        label="Accomodation Name"
        margin="normal"
        disabled={isAccomDisabled}
      />
      <FormPassengerSelects stepName={stepName} />
    </>
  );
});
