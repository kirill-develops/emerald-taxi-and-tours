import Stack from '@mui/material/Stack';
import React, { useContext } from 'react';
import DatePicker from '@Form/TransferDatePicker';
import RoundTripRadio from '@Form/RoundTripRadio';
import FormInputStack from '@elements/FormInputStack';
import FormTextField from '@elements/FormTextField';
import FormPassengerSwitches from './FormPassengerSwitches';
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
    <Stack alignItems="center">
      <FormInputStack sx={{ width: { xs: '55%', sm: 'initial' } }}>
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
          sx={{ mt: { xs: 1, sm: 0 } }}
          inputProps={{
            step: 1,
            inputMode: 'numeric',
          }}
        />
      </FormInputStack>
      <RoundTripRadio />
      <DatePicker />
      <FormTextField
        stepName={stepName}
        fieldName="accomName"
        label="Accomodation Name"
        margin="normal"
        disabled={isAccomDisabled}
      />
      <FormPassengerSwitches stepName={stepName} />
    </Stack>
  );
}

export default FormFlightDetails;
