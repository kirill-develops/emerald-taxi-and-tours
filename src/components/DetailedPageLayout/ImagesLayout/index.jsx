import { styled } from '@mui/material/styles';
import React from 'react';
import { GridContainer } from '@elements/CustomGridEl';
import Images from './Elements/Images';

const ImageGrid = styled(GridContainer)(({ theme }) =>
  theme.unstable_sx({
    height: { xxs: '18dvh', md: '25dvh' },
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  }),
);

export default React.memo(function ImageLayout({}) {
  return (
    <ImageGrid>
      <Images />
    </ImageGrid>
  );
});
