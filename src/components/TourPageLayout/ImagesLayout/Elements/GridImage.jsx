import Image from 'next/image';
import { styled, useTheme } from '@mui/material/styles';

import React from 'react';
import { GridItem } from '@elements/CustomGridEl';

const GridImageItem = styled(GridItem)(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
    width: { xxs: '100%', xs: '32.9%', sm: '24.7%', md: '19.7%' },
  }),
);

const StyledNextImage = styled(Image)(({ theme }) => ({
  objectFit: 'cover',
}));

export default React.memo(function GridImage({ picData }) {
  const {
    caption,
    images: { original: { url = picData.images.large.url } = { images: {} } },
  } = picData;

  const {
    breakpoints: { values: breakpoints },
  } = useTheme();

  const muiImageSizes = `
    (max-width: ${breakpoints.xxs}) 100dvw, 
    (max-width: ${breakpoints.sm}) 30dvw, 
    (max-width: ${breakpoints.md}) 25dvw, 
    50dvw`;

  return (
    <GridImageItem>
      <StyledNextImage
        src={url}
        alt={caption}
        quality={100}
        sizes={muiImageSizes}
        fill
      />
    </GridImageItem>
  );
});
