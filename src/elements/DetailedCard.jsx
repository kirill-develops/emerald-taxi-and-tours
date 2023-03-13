import { Card } from '@mui/material';
import React from 'react';

export const cardStyleProps = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

function DetailedCard({ sx, children, ...rest }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Card>
  );
}

export default DetailedCard;
