import dynamic from 'next/dynamic';

const TextField = dynamic(() => import('@mui/material/TextField'));
import { useFormikContext } from 'formik';
import React from 'react';
import usePhoneField from '@hooks/usePhoneField';

function FormTextField({
  stepName,
  fieldName,
  label,
  type = 'text',
  required = true,
  sx,
  mobileNumber: mobile = false,
  ...props
}) {
  const { touched, errors, handleChange, handleBlur } = useFormikContext();

  const { fieldValue, placeholderText, handlePhoneChange } = usePhoneField(
    stepName,
    fieldName,
    mobile,
  );

  return (
    <TextField
      name={`${stepName}.${fieldName}`}
      label={label}
      type={type}
      value={fieldValue}
      onChange={mobile ? handlePhoneChange : handleChange}
      onBlur={handleBlur}
      helperText={
        touched?.[stepName]?.[fieldName] && errors?.[stepName]?.[fieldName]
      }
      error={
        touched?.[stepName]?.[fieldName] &&
        Boolean(errors?.[stepName]?.[fieldName])
      }
      placeholder={placeholderText}
      variant="outlined"
      sx={{ ...sx }}
      required={required}
      fullWidth
      {...props}
    />
  );
}

export default React.memo(FormTextField);
