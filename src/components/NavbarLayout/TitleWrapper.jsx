import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import React from 'react';

import NavLogo from './Elements/NavLogo';
import TitleScript from './Elements/TitleScript';

const TitleWrapper = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    flexGrow: 1,
    justifyContent: { xxs: 'center', md: 'initial' },
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'nowrap',
  }),
);

export default function NavTitle() {
  const isXsBreakpoint = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <TitleWrapper
      direction="row"
      spacing={1.5}
    >
      <NavLogo />
      {!isXsBreakpoint && <TitleScript />}
    </TitleWrapper>
  );
}
