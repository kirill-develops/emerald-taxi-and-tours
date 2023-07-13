import Container from '@mui/material/Container';
import React from 'react';

export default function MaxWidthContainer({
  maxWidth = 'xl',
  children,
  ...others
}) {
  return (
    <Container
      maxWidth={maxWidth}
      {...others}
    >
      {children}
    </Container>
  );
}
