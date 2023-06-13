import React, { useContext } from 'react';
import BookingLayout from '@components/BookingLayout';
import { ParamContext } from '@Form/FormContextProvider';
import ImageSwiper from './ImageSwiper';
import ImageLayout from './ImageLayout';
import ImageOverlayWrapper from './ImageOverlayWrapper';

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
      <ImageOverlayWrapper
        photoCount={details.photo_count}
        link={details.see_all_photos}
      >
        <ImageLayout photos={photos} />
      </ImageOverlayWrapper>
    </>
  );
}

export default React.memo(DynamicTourLayout);
