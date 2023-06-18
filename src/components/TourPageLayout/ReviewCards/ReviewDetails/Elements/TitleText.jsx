import Typography from '@mui/material/Typography';
import React from 'react';

export default function TitleText({ children, ...rest }) {
  return (
    <Typography
      variant="subtitle1"
      fontWeight={700}
    >
      {children}
    </Typography>
  );
}
