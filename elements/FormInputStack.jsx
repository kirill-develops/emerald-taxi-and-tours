import Stack from '@mui/material/Stack';
import React from 'react';

function FormInputStack(props) {
  const { children, sx, ...rest } = props;

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems="stretch"
      sx={{
        mt: 2,
        mb: 1,
        columnGap: 3,
        rowGap: 2,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export default FormInputStack;
