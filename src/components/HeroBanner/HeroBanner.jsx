import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import React from 'react';
import heroImage from '@../public/hero/101.jpg';
import Title from './Elements/Title';

const BannerContainer = styled((props) => (
  <Container
    disableGutters
    maxWidth={false}
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
  }),
);

const ImageWrapper = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    minHeight: { xxs: '360px' },
    overflow: 'hidden',
    filter: 'brightness(60%)',
  }),
);

const MuiImage = styled((props) => (
  <Image
    quality={100}
    priority
    fill
    sizes="100vw"
    alt={props.alt}
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    objectFit: 'cover',
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

export default React.memo(function HeroBanner() {
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
});
