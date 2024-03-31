import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import React from 'react';
import { layoutGridSpacingProp } from '@elements/CustomGridEl';

const PageLayoutStack = styled((props) => (
  <Stack
    rowGap={layoutGridSpacingProp}
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    py: { xxs: 3, lg: 4.5 },
    minHeight: 'fit-content',
    height: '100%',
  }),
);

export default React.memo(PageLayoutStack);
