import Stack from '@mui/material/Stack';
import React from 'react';

export default function SectionLayoutStack({ children, ...rest }) {
  return (
    <Stack
      rowGap={2}
      marginTop={{ xxs: 3, sm: 5 }}
      {...rest}
    >
      {children}
    </Stack>
  );
}
