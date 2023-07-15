import Image from 'next/image';
import { Box, styled } from '@mui/material';
import { useTheme } from '@emotion/react';
import React from 'react';

const StyledNextImage = styled(Image)(({ theme }) => ({
  objectFit: 'cover',
}));

export default function CardImage({ picData, ...rest }) {
  const {
    breakpoints: { values: breakpoints },
  } = useTheme();

  if (!picData) {
    return null;
  }
  const {
    caption,
    images: { original: { url = picData.images.large.url } = { images: {} } },
  } = picData;

  const muiImageSizes = `
    (max-width: ${breakpoints.sm}) 30dvw, 
    (max-width: ${breakpoints.md}) 25dvw, 
    50dvw`;

  return (
    <Box sx={{ position: 'relative', height: '100%' }}>
      <StyledNextImage
        src={url}
        alt={caption}
        quality={100}
        sizes={muiImageSizes}
        fill
      />
    </Box>
  );
}
