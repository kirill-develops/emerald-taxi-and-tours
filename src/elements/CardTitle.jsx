import Typography from '@mui/material/Typography';
import React from 'react';

export default function CardTitle({ children, ...rest }) {
  return (
    <Typography
      variant="h5"
      fontWeight={700}
      {...rest}
    >
      {children}
    </Typography>
  );
}
