import React, { useContext } from 'react';
import FormTextField from '@elements/FormTextField';
import { ParamContext } from '../FormContextProvider';
import useStepperData from '../../StepperLayout/hooks/useStepperData';

function useAccomDisabledHandler() {
  const { area, type, link } = useContext(ParamContext);

  if (type === 'tour') {
    return false;
  }

  const areaLink = area?.link;
  const transferLink = link;

  return transferLink !== 'other' && areaLink !== 'other_areas';
}

function useStepTextField(fieldName, label, additionalProps = {}) {
  const { activeStepUrl: stepName } = useStepperData();

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
  const { activeStepUrl: stepName } = useStepperData();

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
  return useStepTextField('lastName', 'Last Name');
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
