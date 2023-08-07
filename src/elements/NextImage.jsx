import Box from '@mui/material/Box';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledNextImage = styled(Image)(({ theme }) => ({
  objectFit: 'cover',
}));

export default function NextImage({ src, altCaption, muiImageSizes }) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        width: '100%',
      }}
    >
      <StyledNextImage
        src={src}
        alt={altCaption}
        quality={100}
        sizes={muiImageSizes}
        fill
      />
    </Box>
  );
}
