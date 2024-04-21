import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';

const StyledBox = styled(Box)({
  position: 'relative',
  height: '100%',
  width: '100%',
});

const ImageSkeleton = styled(
  (props) => (
    <Skeleton
      variant="rectangular"
      animation="wave"
      height="100%"
      {...props}
    />
  ),
  { shouldForwardProp: (prop) => prop !== 'isLoaded' },
)((prop) => ({
  opacity: prop.isLoaded ? 0 : 1,
  transition: 'opacity 0.5s ease-in-out',
}));

export const StyledNextImage = styled(Image, {
  shouldForwardProp: (prop) => prop !== 'isLoaded',
})((props) => ({
  objectFit: 'cover',
  opacity: props.isLoaded ? 1 : 0,
  transition: 'opacity 0.5s ease-in-out',
}));

export default React.memo(function NextImage({
  src,
  altCaption,
  muiImageSizes = '100vw',
  boxStyles,
  ...additionalImageProps
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <StyledBox sx={boxStyles}>
      {!isLoaded && <ImageSkeleton isLoaded={isLoaded} />}
      <StyledNextImage
        src={src}
        alt={altCaption}
        quality={80}
        sizes={muiImageSizes}
        fill
        isLoaded={isLoaded}
        onLoad={() => setIsLoaded(true)}
        {...additionalImageProps}
      />
    </StyledBox>
  );
});
