import Stack from '@mui/material/Stack';
import React from 'react';

export default function PageLayoutStack({ children, ...rest }) {
  return (
    <Stack
      rowGap={{ xxs: 2, sm: 4, md: 6 }}
      sx={{ py: 3 }}
      {...rest}
    >
      {children}
    </Stack>
  );
}
