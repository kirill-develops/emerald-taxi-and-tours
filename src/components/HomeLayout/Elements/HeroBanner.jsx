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
        <Stack
          sx={{
            zIndex: 10,
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <Typography
            variant="h2"
            textAlign={'center'}
            sx={{
              textAlign: 'center',
              fontWeight: 600,
            }}
          >
            Emerald Taxi & Tours
          </Typography>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            Private Airport Transportation & Island Tours
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            Your Best Vacation Begins and Ends with Emerald Taxi & Tours
          </Typography>
        </Stack>
      </ImageWrapper>
    </Container>
  );
}
