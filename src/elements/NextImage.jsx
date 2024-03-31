import Box from '@mui/material/Box';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledBox = styled(Box)({
  position: 'relative',
  height: '100%',
  width: '100%',
});

export const StyledNextImage = styled(Image)({
  objectFit: 'cover',
});

export default React.memo(function NextImage({
  src,
  altCaption,
  muiImageSizes = `100vw`,
  boxStyles,
  ...rest
}) {
  return (
    <StyledBox sx={boxStyles}>
      <StyledNextImage
        src={src}
        alt={altCaption}
        quality={100}
        sizes={muiImageSizes}
        fill
        {...rest}
      />
    </StyledBox>
  );
});
