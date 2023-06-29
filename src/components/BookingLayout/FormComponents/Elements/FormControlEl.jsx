import FormControl from '@mui/material/FormControl';
import React from 'react';
import useFieldSizeGetter from '../hooks/useFieldSizeGetter';
import useErrorGetter from '../hooks/useErrorGetter';

export default function FormControlEl({ valueName, children, ...rest }) {
  const size = useFieldSizeGetter();

  const fieldErrors = useErrorGetter(valueName);

  return (
    <FormControl
      error={fieldErrors}
      size={size}
      required
      {...rest}
    >
      {children}
    </FormControl>
  );
}
