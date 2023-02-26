import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useFormikContext } from 'formik';
import React from 'react';
import DatePicker from '@Form/DatePicker';
import RoundTripRadio from '@Form/RoundTripRadio';

function FormFlightDetails() {
  const formik = useFormikContext();
  const { values, handleChange, handleBlur, touched, errors } = formik;

  return (
    <Stack alignItems="center">
      <Stack
        direction="row"
        alignItems="center"
        spacing={3}
      >
        <TextField
          name="flightDetails.airline"
          label="Airline"
          type="text"
          value={values?.flightDetails?.airline}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={
            (touched?.flightDetails?.airline &&
              errors?.flightDetails?.airline) ||
            '* Required'
          }
          error={
            touched?.flightDetails?.airline &&
            Boolean(errors?.flightDetails?.airline)
          }
          variant="outlined"
        />
        <TextField
          name="flightDetails.flightNum"
          label="Flight Number"
          type="number"
          value={values?.flightDetails?.flightNum}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={
            (touched?.flightDetails?.flightNum &&
              errors?.flightDetails?.flightNum) ||
            '* Required'
          }
          error={
            touched?.flightDetails?.flightNum &&
            Boolean(errors?.flightDetails?.flightNum)
          }
          variant="outlined"
          margin="normal"
        />
      </Stack>
      <RoundTripRadio />
      <DatePicker />
      <TextField
        name="flightDetails.accomName"
        label="Accomodation Name"
        type="text"
        value={values?.flightDetails?.accomName}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={
          (touched?.flightDetails?.accomName &&
            errors?.flightDetails?.accomName) ||
          '* Required'
        }
        error={
          touched?.flightDetails?.accomName &&
          Boolean(errors?.flightDetails?.accomName)
        }
        variant="outlined"
        margin="normal"
        fullWidth
      />
    </Stack>
  );
}

export default FormFlightDetails;
