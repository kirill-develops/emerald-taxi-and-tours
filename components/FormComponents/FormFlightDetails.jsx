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
          name="airline"
          label="Airline"
          type="text"
          value={values.airline}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={'* Required'}
          error={touched.airline && Boolean(errors.airline)}
          variant="outlined"
        />
        <TextField
          name="flightNum"
          label="Flight Number"
          type="number"
          value={values.flightNum}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={'* Required'}
          error={touched.flightNum && Boolean(errors.flightNum)}
          variant="outlined"
          margin="normal"
        />
      </Stack>
      <RoundTripRadio />
      <DatePicker />
      <TextField
        name="accomName"
        label="Accomodation Name"
        type="text"
        value={values.accomName}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={'* Required'}
        error={touched.accomName && Boolean(errors.accomName)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
    </Stack>
  );
}

export default FormFlightDetails;
