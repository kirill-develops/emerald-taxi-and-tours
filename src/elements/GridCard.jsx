import { Card } from '@mui/material';
import React from 'react';

export const cardStyleProps = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: 0,
};

function GridCard({ sx, children, ...rest }) {
  return (
    <Card
      sx={{ ...cardStyleProps, ...sx }}
      {...rest}
    >
      {children}
    </Card>
  );
}

export default React.memo(GridCard);