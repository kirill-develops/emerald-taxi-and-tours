import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import { useFormikContext } from 'formik';
import React from 'react';
import useFieldSizeGetter from '../hooks/useFieldSizeGetter';
import useFieldPropGetter from '../hooks/useFieldPropGetter';

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
  const { values } = useFormikContext();

  const inputLabel = 'Transfer Type';

  const radioGroupProps = useFieldPropGetter('transferType', inputLabel);

  const size = useFieldSizeGetter();

  return (
    <>
      <StyledFormControl size={size}>
        <FormLabel
          id="transfer-type-select-radio"
          required
        >
          {inputLabel}
        </FormLabel>
        <StyledRadioGroup
          area-aria-labelledby="transfer-type-select-radio"
          {...radioGroupProps}
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
