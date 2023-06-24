import React from 'react';
import DatePicker from '../Elements/TransferDatePicker';
import FormInputStack from '@elements/FormInputStack';
import FormPassengerSelects from '../Elements/FormPassengerSelects';
import RoundTripRadio from '../Elements/RoundTripRadio';

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
  return (
    <>
      <RoundTripRadio />
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
      <DatePicker />
      <FormPassengerSelects />
    </>
  );
});
