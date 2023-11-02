import { lighten } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import React from 'react';

const stackStyles = (theme) => ({
  textShadow: `-1.3px -1.3px 0 ${theme.palette.common.black}, 
                1.3px -1.3px 0 ${theme.palette.common.black}, 
                -1.3px  1.3px 0 ${theme.palette.common.black}, 
                1.3px  1.3px 0 ${theme.palette.common.black}`,
});

const topTextStyles = (theme, styles) => ({
  fontSize: { xxs: '4rem', xs: '5rem', md: '7rem' },
  color: theme.palette.primary.main,
  ...styles,
});

const middleTextStyles = (theme, styles) => ({
  fontSize: { xxs: '2.2rem', xs: '3rem', md: '4rem' },
  color: lighten(theme.palette.common.green, 0.15),
  ...styles,
});

const bottomTextStyles = (theme, styles) => ({
  fontSize: { xxs: '2rem', sm: '2.8rem', md: '4rem' },
  color: theme.palette.primary.main,
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
    <Stack sx={stackStyles}>
      <TitleText sx={topTextStyles}>Emerald</TitleText>
      <TitleText sx={middleTextStyles}>Taxi & Tours</TitleText>
      <TitleText sx={bottomTextStyles}>Jamaica</TitleText>
    </Stack>
  );
}
