import Stack from '@mui/material/Stack';
import React from 'react';
import { layoutGridSpacingProp } from '@elements/CustomGridEl';
export default function PageLayoutStack({ children, ...rest }) {
  return (
    <Stack
      rowGap={layoutGridSpacingProp}
      sx={{ py: { xxs: 3, lg: 4.5 } }}
      {...rest}
    >
      {children}
    </Stack>
  );
}
