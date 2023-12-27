import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';

import Link from '@material/Link';

export default function TitleScript() {
  return (
    <HighlightedText>
      Emerald<StandardText>Taxi & Tours</StandardText>
    </HighlightedText>
  );
}

const HighlightedText = styled((props) => (
  <Link
    href="/"
    noWrap
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    display: 'flex',
    alignItems: 'center',
    columnGap: 1,
    color: theme.palette.primary,
    typography: 'navTitle',
    textDecoration: 'none',
  }),
);

const StandardText = styled((props) => (
  <Typography
    component="span"
    noWrap
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    color: theme.palette.background.variantText,
    typography: 'navTitle',
  }),
);
