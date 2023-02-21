import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function Copyright() {
  return (
    <Container
      component="footer"
      sx={{ my: '1em' }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
      >
        Established 2021
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
      >
        {'Copyright © '}
        Emeral Taxi & Tour {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}
