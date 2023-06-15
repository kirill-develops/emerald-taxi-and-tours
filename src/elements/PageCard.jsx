import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const PageCard = styled(Card)(({ theme }) =>
  theme.unstable_sx({
    width: '100%',
    py: { xxs: 1, md: 3 },
    borderRadius: 0,
    borderLeft: 'none',
    borderRight: 'none',
  }),
);

export default React.memo(PageCard);
