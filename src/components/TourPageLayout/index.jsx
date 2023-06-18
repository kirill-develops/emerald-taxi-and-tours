import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import React, { useContext } from 'react';
import BookingLayout from '@components/BookingLayout';
import { ParamContext } from '@Form/FormContextProvider';
import DetailsComponent from './DetailsComponent/index';
import ImageLayout from './ImagesLayout/';
import ImageOverlayWrapper from './ImageOverlayWrapper';
import RatingsAndReviews from './RatingsAndReviews/';
import Reviews from './Reviews';

import Description from './Description';
import ReviewCards from './ReviewCards';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: { xxs: 0, md: 2 },
};

function ReviewsContainer({ children, sx, ...rest }) {
  return (
    <Container
      maxWidth="md"
      disableGutters
      sx={{ ...containerStyles, ...sx }}
      {...rest}
    >
      {children}
    </Container>
  );
}

export default function DynamicTourLayout() {
  const { tourParams } = useContext(ParamContext);

  const { tripAdvisorDetails: details, tripAdvisorReviews: reviews } =
    tourParams;

  return (
    <>
      <BookingLayout />
      <DetailsComponent>
        <ImageOverlayWrapper>
          <ImageLayout />
        </ImageOverlayWrapper>
      </DetailsComponent>
      <Stack spacing={2}>
        <Description />
        <RatingsAndReviews />
        <ReviewsContainer>
          <Reviews />
          <ReviewCards />
        </ReviewsContainer>
      </Stack>
    </>
  );
}
