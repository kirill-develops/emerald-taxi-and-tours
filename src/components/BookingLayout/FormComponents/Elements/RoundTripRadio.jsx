import { styled } from '@mui/material/styles';
import { useFormikContext } from 'formik';
import React from 'react';
import useStepperData from '../../StepperLayout/hooks/useStepperData';
import useFieldSizeGetter from '../hooks/useFieldSizeGetter';

const options = [
  { value: 'arrival', label: 'Arrival' },
  { value: 'departure', label: 'Departure' },
  { value: 'roundtrip', label: 'RoundTrip' },
];


const StyledFormControl = styled(FormControl)(({ theme }) =>
  theme.unstable_sx({ mt: 2, mb: 1 }),
);
export default React.memo(function RoundTripRadio({}) {
  const { values, handleChange, handleBlur } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const size = useFieldSizeGetter();

  return (
    <>
      <StyledFormControl size={size}>
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
      </StyledFormControl>
    </>
  );
});
