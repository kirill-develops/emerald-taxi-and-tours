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
  const textStyles = {
    color: (theme) => theme.palette.secondary.containerText,
    ...sx,
  };
  return (
    <Container
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={{ zIndex: 1 }}
    >
      <Typography
        variant="h4"
        fontWeight={500}
        sx={textStyles}
        {...rest}
      >
        {children}
      </Typography>
    </Container>
  );
}
