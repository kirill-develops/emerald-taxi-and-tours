import Stack from '@mui/material/Stack';

import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import FormTextField from '@elements/FormTextField';
import FormPhoneField from '@Form/FormPhoneField';

function FormPersonalDetails() {
  const stepName = 'personalDetails';

  return (
    <Stack alignItems="center">
      <FormInputStack sx={{ width: '100%' }}>
        <FormTextField
          stepName={stepName}
          fieldName="firstName"
          label="First Name"
        />
        <FormTextField
          stepName={stepName}
          fieldName="lastName"
          label="Last Name"
          sx={{ mt: { xs: 1, sm: 0 } }}
        />
      </FormInputStack>
      <FormTextField
        stepName={stepName}
        fieldName="email"
        label="Email"
        type="email"
        margin="normal"
      />
      <FormTextField
        stepName={stepName}
        fieldName="emailConfirm"
        label="Confirm Email"
        type="email"
        margin="normal"
      />
      <FormPhoneField />
    </Stack>
  );
}

export default FormPersonalDetails;