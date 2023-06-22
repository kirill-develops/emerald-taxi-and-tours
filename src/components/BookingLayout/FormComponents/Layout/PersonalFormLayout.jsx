import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import FormTextField from '@elements/FormTextField';
import FormPhoneField from '../PhoneField/PhoneField';
import { useFormikContext } from 'formik';
import useStepperData from '../../StepperLayout/hooks/useStepperData';

const inputStackStyles = { width: '100%' };

export default React.memo(function FormPersonalDetails() {
  const {
    values: { bookingStep },
  } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData(bookingStep);

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
});
