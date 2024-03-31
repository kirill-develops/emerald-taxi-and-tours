import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import FormPhoneField from '../PhoneField/PhoneField';
import {
  ConfirmEmailTextField,
  EmailTextField,
  FirstNameTextField,
  LastNameTextField,
} from '../Elements/FormTextFields';

export default React.memo(function FormPersonalDetails() {
  return (
    <>
      <FormInputStack>
        <FirstNameTextField />
        <LastNameTextField />
      </FormInputStack>
      <EmailTextField />
      <ConfirmEmailTextField />
      <FormPhoneField />
    </>
  );
});
