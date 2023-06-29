import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import { useFormikContext } from 'formik';
import useStepperData from '../../../StepperLayout/hooks/useStepperData';

export default function useSelectPropGetter(valueName) {
  const { values, handleChange, handleBlur, setFieldValue, setFieldTouched } =
    useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const isMd = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const size = isMd ? 'medium' : 'small';

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
    label: `# of ${labelSuffix}`,
    name: `${stepName}.${valueName}`,
    value: values[stepName]?.[valueName],
    onChange: onChange,
    onBlur: handleBlur,
    size: size,
    renderValue: (selected) => <Typography as="span">{selected}</Typography>,
  };
}
