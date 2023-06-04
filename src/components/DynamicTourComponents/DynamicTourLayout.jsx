import React, { useContext } from 'react';
import BookingLayout from '@components/BookingLayout';
import { ParamContext } from '@Form/FormContextProvider';
import ImageSwiper from './ImageSwiper';

function DynamicTourLayout() {
  const { tourParams } = useContext(ParamContext);
  const {
    tripAdvisorDetails: details,
    tripAdvisorPhotos: photos,
    tripAdvisorReviews: reviews,
  } = tourParams;

  

  return (
    <>
      <BookingLayout />
      <ImageSwiper photos={photos} />
    </>
  );
}

export default React.memo(DynamicTourLayout);
