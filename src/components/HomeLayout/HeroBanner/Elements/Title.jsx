import { darken } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import React from 'react';

const titleWhite = (theme) => darken(theme.palette.common.white, 0.135);
const lineHeight = 1.1;

const topTextStyles = (theme, styles) => ({
  fontSize: { xxs: '4rem', xs: '5rem', md: '7rem' },
  lineHeight: lineHeight,
  color: theme.palette.common.yellow,
  ...styles,
});

const middleTextStyles = (theme, styles) => ({
  fontSize: { xxs: '2.2rem', xs: '3rem', md: '4rem' },
  lineHeight: lineHeight,
  color: titleWhite,
  ...styles,
});

const bottomTextStyles = (theme, styles) => ({
  fontSize: { xxs: '2rem', sm: '2.8rem', md: '4rem' },
  lineHeight: lineHeight,
  color: titleWhite,
  ...styles,
});

const titleTextStyles = { textAlign: 'center' };

function TitleText({ children, sx, ...rest }) {
  return (
    <Typography
      altfont="true"
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
        component="h3"
        sx={bottomTextStyles}
      >
        Jamaica
      </TitleText>
    </Stack>
  );
}
