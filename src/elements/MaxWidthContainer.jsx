import Container from '@mui/material/Container';
import React from 'react';

export default function MaxWidthContainer({ children, ...others }) {
  return (
    <Container
      maxWidth="xl"
      {...others}
    >
      {children}
    </Container>
  );
}
