import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  useMediaQuery,
} from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';
import useStepperData from '../../StepperLayout/hooks/useStepperData';

const options = [
  { value: 'arrival', label: 'Arrival' },
  { value: 'departure', label: 'Departure' },
  { value: 'roundtrip', label: 'RoundTrip' },
];

function RoundTripRadio({}) {
  const { values, handleChange, handleBlur } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const isMd = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const size = isMd ? 'medium' : 'small';

  return (
    <>
      <FormControl
        sx={{ mt: 2, mb: 1 }}
        size={size}
      >
        <FormLabel
          id="transfer-type-select-radio-label"
          required
        >
          Transfer Type
        </FormLabel>
        <RadioGroup
          name={`${stepName}.transferType`}
          area-aria-labelledby="transfer-type-select-radio-label"
          value={values[stepName]?.transferType}
          onChange={handleChange}
          onBlur={handleBlur}
          sx={{
            gap: { xxs: 'initial', sm: 3 },
            flexDirection: { xxs: 'column', xs: 'row' },
          }}
          row
        >
          {options.map(({ value, label }) => (
            <FormControlLabel
              key={value}
              checked={values?.flightDetails?.transferType === value}
              value={value}
              control={<Radio size={size} />}
              label={label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default RoundTripRadio;
