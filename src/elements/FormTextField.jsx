import dynamic from 'next/dynamic';

const TextField = dynamic(() => import('@mui/material/TextField'));
import { useFormikContext } from 'formik';
import React from 'react';
import usePhoneField from '@hooks/usePhoneField';
import useFieldSizeGetter from '../components/BookingLayout/FormComponents/hooks/useFieldSizeGetter';

function FormTextField({
  stepName,
  fieldName,
  label,
  type = 'text',
  required = true,
  second = false,
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

  const secondFieldStyles = second && { mt: { xxs: 1, sm: 0 } };

  const size = useFieldSizeGetter();

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
      sx={{ ...secondFieldStyles, ...sx }}
      required={required}
      size={size}
      fullWidth
      {...props}
    />
  );
}

export default React.memo(FormTextField);
