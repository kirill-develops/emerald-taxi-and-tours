import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import React, { useMemo } from 'react';

import aboutImageFile from '@../public/aboutUs.jpeg';

const ImageWrapper = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
    flexGrow: 1,
    width: '100%',
    height: { xxs: '50vh', sm: 'initial' },
  }),
);

const getImageProps = (breakPoint) => ({
  quality: 100,
  fill: true,
  style: { objectFit: 'cover' },
  sizes: `(max-width: ${breakPoint}px) 100vw, 
  50vw`,
});

export default React.memo(function AboutImage() {
  const {
    breakpoints: {
      values: { sm },
    },
  } = useTheme();

  const imageProps = useMemo(() => getImageProps(sm), [sm]);

  return (
    <ImageWrapper>
      <Image
        src={aboutImageFile}
        alt="Photo of happy driver & vehicle"
        {...imageProps}
      />
    </ImageWrapper>
  );
});
