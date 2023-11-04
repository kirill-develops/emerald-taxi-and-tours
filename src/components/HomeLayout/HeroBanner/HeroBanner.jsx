import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import React from 'react';
import heroImage from '@../public/hero/101.jpg';
import Title from './Elements/Title';

const ImageWrapper = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    height: { xxs: '35dvh', md: '40dvh' },
    minHeight: { xxs: '360px', md: '480px', lg: '500px' },
    overflow: 'hidden',
    filter: 'brightness(60%)',
  }),
);

const OverlayStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'space-evenly',
  }),
);

export default function HeroBanner() {
  return (
    <BannerContainer>
      <ImageWrapper>
        <MuiImage
          src={heroImage}
          alt="hero banner"
        />
      </ImageWrapper>
      <OverlayStack>
        <Title />
      </OverlayStack>
    </BannerContainer>
  );
}

const bannerContainerStyles = {
  position: 'relative',
};

function BannerContainer({ children }) {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={bannerContainerStyles}
    >
      {children}
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
      style={muiImageStyles}
      {...rest}
    />
  );
}
