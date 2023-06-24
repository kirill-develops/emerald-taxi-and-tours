import { useFormikContext } from 'formik';
import React, { useContext } from 'react';
import FormTextField from '@elements/FormTextField';
import { ParamContext } from '../FormContextProvider';
import useStepperData from '../../StepperLayout/hooks/useStepperData';

function useAccomDisabledHandler() {
  const { areaParams, transferParams, type } = useContext(ParamContext);

  if (type === 'tour') {
    return false;
  }

  const areaLink = areaParams?.link;
  const transferLink = transferParams?.link;

  return transferLink !== 'other' && areaLink !== 'other_areas';
}

function useStepTextField(fieldName, label, additionalProps = {}) {
  const {
    values: { bookingStep },
  } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData(bookingStep);

  return (
    <FormTextField
      stepName={stepName}
      fieldName={fieldName}
      label={label}
      {...additionalProps}
    />
  );
}

export function AccomTextField(props) {
  const {
    values: { bookingStep },
  } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData(bookingStep);

  const isAccomDisabled = useAccomDisabledHandler();

  const label =
    stepName === 'tourDetails'
      ? 'PickUp: Accomodation Name'
      : 'Accomodation Name';

  const fieldProps = { margin: 'normal', disabled: isAccomDisabled, ...props };

  return useStepTextField('accomName', label, fieldProps);
}

export function AirlineTextField() {
  return useStepTextField('airline', 'Airline');
}

export function FlightNumTextField() {
  return useStepTextField('flightNum', 'Flight Number', {
    type: 'tel',
    second: true,
    inputProps: {
      step: 1,
      inputMode: 'numeric',
    },
  });
}

export function FirstNameTextField() {
  return useStepTextField('firstName', 'First Name');
}

export function LastNameTextField() {
  return useStepTextField('lastName', 'Last Name', { second: true });
}

export function EmailTextField() {
  return useStepTextField('email', 'Email', {
    type: 'email',
    margin: 'normal',
  });
}

export function ConfirmEmailTextField() {
  return useStepTextField('emailConfirm', 'Confirm Email', {
    type: 'email',
    margin: 'normal',
  });
}
