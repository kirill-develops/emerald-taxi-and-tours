import dynamic from 'next/dynamic';

const TextField = dynamic(() => import('@mui/material/TextField'));
import { useFormikContext } from 'formik';
import React from 'react';

function FormTextField({
  stepName,
  fieldName,
  label,
  type = 'text',
  required = true,
  sx,
  ...props
}) {
  const formik = useFormikContext();
  const { values, touched, errors, handleChange, handleBlur } = formik;

  return (
    <TextField
      name={`${stepName}.${fieldName}`}
      label={label}
      type={type}
      value={values?.[stepName]?.[fieldName]}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={
        touched?.[stepName]?.[fieldName] && errors?.[stepName]?.[fieldName]
      }
      error={
        touched?.[stepName]?.[fieldName] &&
        Boolean(errors?.[stepName]?.[fieldName])
      }
      variant="outlined"
      sx={{ ...sx }}
      fullWidth
      required={required}
      {...props}
    />
  );
}

export default React.memo(FormTextField);
