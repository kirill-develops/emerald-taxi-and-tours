import Typography from '@mui/material/Typography';
import React from 'react';

export default function CardDescription({ description, sx, ...rest }) {
  return (
    description.length > 0 && (
      <Typography
        sx={sx}
        {...rest}
      >
        {description}
      </Typography>
    )
  );
}
