import Typography from '@mui/material/Typography';
import React from 'react';
import { useFormikContext } from 'formik';
import useStepperData from '../../../StepperLayout/hooks/useStepperData';
import useFieldPropGetter from '../../hooks/useFieldPropGetter';

export default function usePassengerSelectPropGetter(valueName) {
  const { values, handleChange, setFieldValue, setFieldTouched } =
    useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const fieldProps = useFieldPropGetter(valueName);

  const isPassengers = valueName === 'passengers';
  const labelSuffix = isPassengers ? 'Passengers' : 'Passengers under 12';

  const handlePassangerChange = (event) => {
    const {
      target: { value: targetValue },
    } = event;

    if (targetValue <= values[stepName]?.childPassengers) {
      setFieldValue(`${stepName}.childPassengers`, 0, true);
      setFieldTouched(`${stepName}.childPassengers`, true, false);
    }

    setFieldValue(`${stepName}.passengers`, targetValue, true);
    setFieldTouched(`${stepName}.passengers`, true, false);
  };

  const onChange = isPassengers ? handlePassangerChange : handleChange;

  return {
    ...fieldProps,
    label: `# of ${labelSuffix}`,
    onChange: onChange,
    renderValue: (selected) => <Typography as="span">{selected}</Typography>,
  };
}
