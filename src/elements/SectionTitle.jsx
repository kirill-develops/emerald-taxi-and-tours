import Typography from '@mui/material/Typography';
import React from 'react';

export default function SectionTitle({ children, ...rest }) {
  return (
    <Typography
      variant="h4"
      fontWeight={500}
      {...rest}
    >
      {children}
    </Typography>
  );
}
