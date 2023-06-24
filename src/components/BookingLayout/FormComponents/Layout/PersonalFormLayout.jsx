import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import FormPhoneField from '../PhoneField/PhoneField';
import {
  ConfirmEmailTextField,
  EmailTextField,
  FirstNameTextField,
  LastNameTextField,
} from '../Elements/FormTextFields';

const inputStackStyles = { width: '100%' };

export default React.memo(function FormPersonalDetails() {
  return (
    <>
      <FormInputStack sx={inputStackStyles}>
        <FirstNameTextField />
        <LastNameTextField />
      </FormInputStack>
      <EmailTextField />
      <ConfirmEmailTextField />
      <FormPhoneField />
    </>
  );
});
