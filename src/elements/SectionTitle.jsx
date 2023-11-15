import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function SectionTitle({
  maxWidth = false,
  disableGutters = false,
  children,
  sx,
  ...rest
}) {
  const textStyles = (theme) => ({
    color: theme.palette.text.primary,
    letterSpacing: -0.6,
    ...sx,
  });
  return (
    <Container
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={{ zIndex: 1 }}
    >
      <Typography
        variant="h5"
        fontWeight={1000}
        sx={textStyles}
        {...rest}
      >
        {children}
      </Typography>
    </Container>
  );
}
