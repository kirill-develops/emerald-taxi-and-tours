import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <>
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
    </>
  );
}
