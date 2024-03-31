import Divider from '@mui/material/Divider';
import React from 'react';

export default function DividerRight(props) {
  return (
    <Divider
      variant="inset"
      textAlign="right"
      {...props}
    />
  );
}
