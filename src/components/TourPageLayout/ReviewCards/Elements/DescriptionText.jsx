import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { ReviewContext } from '../ReviewCard';

export default function DescriptionText({ ...rest }) {
  const { text } = useContext(ReviewContext);

  return (
    <Typography
      variant="body1"
      {...rest}
    >
      {text}
    </Typography>
  );
}
