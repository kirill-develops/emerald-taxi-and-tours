import React, { useContext } from 'react';
import DatePicker from '@Form/TransferDatePicker';
import RoundTripRadio from '@Form/RoundTripRadio';
import FormInputStack from '@elements/FormInputStack';
import FormTextField from '@elements/FormTextField';
import FormPassengerSelects from './FormPassengerSelects';
import { ParamContext } from './FormContextProvider';

function FormFlightDetails() {
  const transferParamContext = useContext(ParamContext);
  const {
    areaParams: { link: areaLink },
    transferParams: { link: transferLink },
  } = transferParamContext;

  const isAccomDisabled =
    transferLink !== 'other' && areaLink !== 'other_areas';

  const stepName = 'flightDetails';

  return (
    <>
      <FormInputStack sx={{ width: { xxs: '55%', sm: 'initial' } }}>
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
        />
      </FormInputStack>
      <RoundTripRadio stepName={stepName} />
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
}

export default FormFlightDetails;
