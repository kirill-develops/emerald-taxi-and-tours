import Typography from '@mui/material/Typography';
import React from 'react';

export default function BookingTitle({ children, ...rest }) {
  const typographyStyles = { fontWeight: 700, textTransform: 'uppercase' };
  return (
    <Typography
      variant="h6"
      sx={typographyStyles}
      {...rest}
    >
      {children}
    </Typography>
  );
}
