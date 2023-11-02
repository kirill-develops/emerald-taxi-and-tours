import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import React from 'react';
import heroImage from '@../public/hero/100.jpeg';
import Tagline from './Elements/Tagline';
import Title from './Elements/Title';

const ImageWrapper = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
    flexGrow: 1,
    height: '65dvh',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  }),
);

const OverlayStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
  }),
);

export default function HeroBanner() {
  return (
    <Container
      disableGutters
      maxWidth={false}
    >
      <ImageWrapper>
        <MuiImage
          src={heroImage}
          alt="hero banner"
        />
        <OverlayStack>
          <Title />
          <Tagline />
        </OverlayStack>
      </ImageWrapper>
    </Container>
  );
}

const muiImageStyles = {
  objectFit: 'cover',
};

function MuiImage({ src, alt, ...rest }) {
  return (
    <Image
      src={src}
      alt={alt}
      quality={100}
      priority
      fill
      sizes="100vw"
      sx={muiImageStyles}
      {...rest}
    />
  );
}
