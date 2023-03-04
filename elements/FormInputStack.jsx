import Stack from '@mui/material/Stack';
import React from 'react';

function FormInputStack(props) {
  const { children, sx, ...rest } = props;

  return (
    <Stack
      direction="row"
      alignItems="stretch"
      spacing={3}
      sx={{ ...sx, mt: 2, mb: 1 }}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export default FormInputStack;
