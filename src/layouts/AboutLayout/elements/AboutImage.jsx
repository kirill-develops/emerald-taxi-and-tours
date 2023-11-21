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
    height: { xxs: '50vh', md: 'unset' },
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
      values: { md },
    },
  } = useTheme();

  const imageProps = useMemo(() => getImageProps(md), [md]);

  return (
    <ImageWrapper>
      <Image
        src={aboutImageFile}
        alt="Photo of happy driver & vehicle"
        priority
        {...imageProps}
      />
    </ImageWrapper>
  );
});
