import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function SectionTitle({
  maxWidth = false,
  disableGutters = false,
  children,
  ...rest
}) {
  return (
    <Container
      maxWidth={maxWidth}
      sx={{ zIndex: 1 }}
      disableGutters={disableGutters}
    >
      <Typography
        variant="h4"
        fontWeight={500}
        {...rest}
      >
        {children}
      </Typography>
    </Container>
  );
}
