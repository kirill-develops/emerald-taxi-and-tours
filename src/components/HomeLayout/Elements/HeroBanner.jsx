import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';
import heroImage from '@../public/hero/100.jpeg';

const MuiImage = styled(Image)(({ theme }) => ({
  objectFit: 'cover',
}));

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
    color: theme.palette.common.black,
    textShadow: `-1px -1px 0 ${theme.palette.common.white}, 
    1px -1px 0 ${theme.palette.common.white}, 
    -1px  1px 0 ${theme.palette.common.white}, 
    1px  1px 0 ${theme.palette.common.white}`,
  }),
);

const TitleText = styled(Typography)(({ theme }) =>
  theme.unstable_sx({
    textAlign: 'center',
    fontWeight: 600,
  }),
);

const HeaderText = styled(Typography)(({ theme }) =>
  theme.unstable_sx({ textAlign: 'center', fontWeight: 500 }),
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
          quality={100}
          priority
          fill
          sizes="100vw"
        />
        <OverlayStack>
          <TitleText variant="h2">Emerald Taxi & Tours</TitleText>
          <HeaderText variant="h3">
            Private Airport Transportation & Island Tours
          </HeaderText>
          <HeaderText variant="h4">
            Your Best Vacation Begins and Ends with Emerald Taxi & Tours
          </HeaderText>
        </OverlayStack>
      </ImageWrapper>
    </Container>
  );
}
