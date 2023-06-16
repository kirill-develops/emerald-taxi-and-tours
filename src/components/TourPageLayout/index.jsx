import React, { useContext } from 'react';
import BookingLayout from '@components/BookingLayout';
import { ParamContext } from '@Form/FormContextProvider';
// import ImageSwiper from './ImageSwiper';
// import DetailsGrid from './DetailsGrid';
import DetailsComponent from './DetailsComponent/index';
import ImageLayout from './ImagesLayout/';
import ImageOverlayWrapper from './ImageOverlayWrapper';
import RatingsAndReviews from './RatingsAndReviews/';
import Reviews from './Reviews';
import { Stack } from '@mui/material';

export default function DynamicTourLayout() {
  const { tourParams } = useContext(ParamContext);

  const { tripAdvisorDetails: details, tripAdvisorReviews: reviews } =
    tourParams;

  console.log(details, reviews);

  return (
    <>
      <BookingLayout />
      <DetailsComponent>
        <ImageOverlayWrapper>
          <ImageLayout />
        </ImageOverlayWrapper>
      </DetailsComponent>
      <Stack spacing={2}>
        <RatingsAndReviews />
        <Reviews />
      </Stack>
      {/* <DetailsGrid imageSwiper={<ImageSwiper photos={photos} />} /> */}
    </>
  );
}
