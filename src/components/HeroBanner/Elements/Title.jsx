import { darken } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import React from 'react';

const titleWhite = (theme) => darken(theme.palette.common.white, 0.035);
const lineHeight = 1.1;

const topTextStyles = (theme, styles) => ({
  fontSize: { xxs: '4rem', xs: '5rem', md: '7rem' },
  lineHeight: lineHeight,
  color: theme.palette.common.yellow,
  ...styles,
});

const middleTextStyles = (theme, styles) => ({
  fontSize: { xxs: '2rem', sm: '2.5rem', md: '3.15rem' },
  lineHeight: lineHeight,
  fontWeight: 900,
  letterSpacing: -3,
  color: titleWhite,
  ...styles,
});

const bottomTextStyles = (theme, styles) => ({
  fontSize: { xxs: '1.6rem', sm: '2.15rem', md: '2.65rem' },
  lineHeight: lineHeight,
  fontWeight: 100,
  fontStyle: 'italic',
  color: titleWhite,
  ...styles,
});

const titleTextStyles = { textAlign: 'center' };

function TitleText({ children, sx, ...rest }) {
  return (
    <Typography
      sx={(theme) => sx(theme, titleTextStyles)}
      {...rest}
    >
      {children}
    </Typography>
  );
}

export default function Title() {
  return (
    <Stack>
      <TitleText
        component="h1"
        sx={topTextStyles}
        altfont="true"
      >
        Emerald
      </TitleText>
      <TitleText
        component="h2"
        sx={middleTextStyles}
      >
        Taxi & Tours
      </TitleText>
      <TitleText
        variant="h3"
        sx={bottomTextStyles}
      >
        Jamaica
      </TitleText>
    </Stack>
  );
}
