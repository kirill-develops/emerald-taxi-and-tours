import Stack from '@mui/material/Stack';
import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import FormTextField from '@elements/FormTextField';
import FormPassengerSwitches from './FormPassengerSwitches';

// tour date & time,
// pickup area

function FormTourDetails() {
  const stepName = 'tourDetails';
  return (
    <Stack alignItems="center">
      <FormInputStack>
        <FormTextField
          stepName={stepName}
          fieldName="accomName"
          label="Accomodation Name"
        />
      </FormInputStack>
      <FormPassengerSwitches stepName={stepName} />
    </Stack>
  );
}

export default FormTourDetails;
