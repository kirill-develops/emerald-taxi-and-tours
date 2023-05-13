import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const textProps = {
  variant: 'body2',
  color: 'text.secondary',
  align: 'center',
};

export default function Copyright() {
  return (
    <Container
      component="footer"
      sx={{ my: '1em' }}
    >
      <Typography {...textProps}>Established 2021</Typography>
      <Typography {...textProps}>
        {'Copyright © '}
        Emeral Taxi & Tour {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}
