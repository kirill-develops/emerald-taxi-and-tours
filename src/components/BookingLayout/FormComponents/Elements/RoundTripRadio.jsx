import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
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

const StyledRadioGroup = styled(RadioGroup)(({ theme }) =>
  theme.unstable_sx({
    gap: { xxs: 'initial', sm: 3 },
    flexDirection: { xxs: 'column', xs: 'row' },
  }),
);

const StyledFormControl = styled(FormControl)(({ theme }) =>
  theme.unstable_sx({ mt: 2, mb: 1 }),
);

export default React.memo(function RoundTripRadio({}) {
  const { values, handleChange, handleBlur } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const formLabel = 'Transfer Type';

  const size = useFieldSizeGetter();

  return (
    <>
      <StyledFormControl size={size}>
        <FormLabel
          id="transfer-type-select-radio"
          required
        >
          {formLabel}
        </FormLabel>
        <StyledRadioGroup
          area-aria-labelledby="transfer-type-select-radio"
          label={formLabel}
          name={`${stepName}.transferType`}
          value={values[stepName]?.transferType}
          onChange={handleChange}
          onBlur={handleBlur}
          row
        >
          {options.map(({ value, label }) => (
            <FormControlLabel
              key={value}
              checked={value === values?.flightDetails?.transferType}
              value={value}
              control={<Radio size={size} />}
              label={label}
            />
          ))}
        </StyledRadioGroup>
      </StyledFormControl>
    </>
  );
});
