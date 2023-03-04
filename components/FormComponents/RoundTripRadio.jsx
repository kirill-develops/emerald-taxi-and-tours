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
  const { values, handleChange, handleBlur } = formik;

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
          name="flightDetails.transferType"
          area-aria-labelledby="transfer-type-select-radio-label"
          value={values?.flightDetails?.transferType}
          onChange={handleChange}
          onBlur={handleBlur}
          sx={{ gap: 3 }}
          row
        >
          <FormControlLabel
            checked={values?.flightDetails?.transferType === 'arrival'}
            value="arrival"
            control={<Radio />}
            label="Arrival"
          />
          <FormControlLabel
            checked={values?.flightDetails?.transferType === 'departure'}
            value="departure"
            control={<Radio />}
            label="Departure"
          />
          <FormControlLabel
            checked={values?.flightDetails?.transferType === 'roundtrip'}
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
