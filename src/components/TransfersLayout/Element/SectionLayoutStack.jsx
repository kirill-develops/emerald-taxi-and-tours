import Stack from '@mui/material/Stack';
import React from 'react';

export default function SectionLayoutStack({ children, ...rest }) {
  return (
    <Stack
      rowGap={2}
      sx={{ py: 3 }}
      {...rest}
    >
      {children}
    </Stack>
  );
}
