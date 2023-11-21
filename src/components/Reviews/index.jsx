import Container from '@mui/material/Container';
import React from 'react';
import Reviews from './ReviewsCard';
import ReviewCards from './ReviewCards';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: { xxs: 0, md: 2 },
  margin: 0,
};

export default function ReviewsLayout({ sx, ...rest }) {
  return (
    <Container
      maxWidth="md"
      disableGutters
      sx={{ ...containerStyles, ...sx }}
      {...rest}
    >
      <Reviews />
      <ReviewCards />
    </Container>
  );
}
