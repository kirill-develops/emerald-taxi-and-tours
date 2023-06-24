import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
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

  const { activeStepUrl: stepName } = useStepperData(values.bookingStep);

  return (
    <>
      <FormControl sx={{ mt: 2, mb: 1 }}>
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
            flexDirection: { xxs: 'column', sm: 'row' },
          }}
          row
        >
          {options.map(({ value, label }) => (
            <FormControlLabel
              key={value}
              checked={values?.flightDetails?.transferType === value}
              value={value}
              control={<Radio />}
              label={label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default RoundTripRadio;
