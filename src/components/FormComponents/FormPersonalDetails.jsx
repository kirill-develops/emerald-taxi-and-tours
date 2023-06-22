import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import FormTextField from '@elements/FormTextField';
import FormPhoneField from '@Form/PhoneField/PhoneField';

const lastNameFieldStyles = { mt: { xxs: 1, sm: 0 } };

const inputStackStyles = { width: '100%' };

function FormPersonalDetails() {
  const stepName = 'personalDetails';

  return (
    <>
      <FormInputStack sx={inputStackStyles}>
        <FormTextField
          stepName={stepName}
          fieldName="firstName"
          label="First Name"
        />
        <FormTextField
          stepName={stepName}
          fieldName="lastName"
          label="Last Name"
          second
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
    </>
  );
}

export default FormPersonalDetails;
