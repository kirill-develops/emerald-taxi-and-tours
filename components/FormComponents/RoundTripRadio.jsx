import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';

function RoundTripRadio() {
  const formik = useFormikContext();
  const { values, handleChange, handleBlur, touched, errors } = formik;

  return (
    <>
      <FormControl sx={{ mt: 2, mb: 1 }}>
        <FormLabel id="transfer-trip-select-radio-label">
          Transfer Type
        </FormLabel>
        <RadioGroup
          name="transferType"
          area-aria-labelledby="transfer-trip-select-radio-label"
          value={values.transferType}
          onChange={handleChange}
          onBlur={handleBlur}
          sx={{ gap: 3 }}
          row
        >
          <FormControlLabel
            checked={values.transferType === 'arrival'}
            value="arrival"
            control={<Radio />}
            label="Arrival"
          />
          <FormControlLabel
            checked={values.transferType === 'departure'}
            value="departure"
            control={<Radio />}
            label="Departure"
          />
          <FormControlLabel
            checked={values.transferType === 'roundtrip'}
            value="roundtrip"
            control={<Radio />}
            label="RoundTrip"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default RoundTripRadio;
