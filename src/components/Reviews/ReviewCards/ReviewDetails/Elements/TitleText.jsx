import Typography from '@mui/material/Typography';
import React from 'react';

export default function TitleText({ children, ...rest }) {
  return (
    <Typography
      variant="h6"
      fontWeight={700}
      {...rest}
    >
      {children}
    </Typography>
  );
}
