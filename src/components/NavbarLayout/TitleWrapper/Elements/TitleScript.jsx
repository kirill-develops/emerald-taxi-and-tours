import Typography from '@mui/material/Typography';
import React from 'react';

import Link from '@material/Link';
import { styled } from '@mui/material';

const StandardText = styled(Typography)(({ theme }) =>
  theme.unstable_sx({
    textTransform: 'capitalize',
    color: (theme) => theme.palette.text.primary,
  }),
);

const HighlightedText = styled(Typography)(({ theme }) =>
  theme.unstable_sx({
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 500,
    color: (theme) => theme.palette.primary,
  }),
);

export default function TitleScript() {
  return (
    <HighlightedText
      variant="h5"
      component={Link}
      href="/"
      noWrap
    >
      Emerald{' '}
      <StandardText
        variant="h6"
        component="span"
        noWrap
      >
        Taxi & Tours
      </StandardText>
    </HighlightedText>
  );
}
