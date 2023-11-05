import Typography from '@mui/material/Typography';
import React from 'react';

import Link from '@material/Link';

export default function TitleScript() {
  return (
    <HighlightedText>
      Emerald <StandardText>Taxi & Tours</StandardText>
    </HighlightedText>
  );
}

const highlightedTextStyles = (theme) => ({
  textDecoration: 'none',
  fontWeight: 500,
  color: theme.palette.primary,
  display: 'flex',
  columnGap: 1,
  alignItems: 'center',
});

function HighlightedText({ children }) {
  return (
    <Typography
      variant="h4"
      altfont="true"
      component={Link}
      href="/"
      noWrap
      sx={highlightedTextStyles}
    >
      {children}
    </Typography>
  );
}

const standardTextStyles = (theme) => ({
  textTransform: 'capitalize',
  color: theme.palette.text.primary,
});

function StandardText({ children }) {
  return (
    <Typography
      variant="h6"
      component="span"
      noWrap
      sx={standardTextStyles}
    >
      {children}
    </Typography>
  );
}
