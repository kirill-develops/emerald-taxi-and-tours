import React, { useContext } from 'react';
import BookingLayout from '@components/BookingLayout';
import { ParamContext } from '@Form/FormContextProvider';
// import ImageSwiper from './ImageSwiper';
// import DetailsGrid from './DetailsGrid';
import DetailsComponent from './DetailsComponent/index';
import ImageLayout from './ImagesLayout/';
import ImageOverlayWrapper from './ImageOverlayWrapper';
import RatingsAndReviews from './RatingsAndReviews';

export default function DynamicTourLayout() {
  const { tourParams } = useContext(ParamContext);

  const {
    tripAdvisorDetails: details,
    tripAdvisorPhotos: photos,
    tripAdvisorReviews: reviews,
  } = tourParams;

  const {
    awards,
    num_reviews: numReviews,
    photo_count: photoCount,
    ranking_data: rankingData = {},
    rating,
    rating_image_url: ratingImageUrl,

    review_rating_count: reviewRatingCount = {},
    see_all_photos: seelAllPicUrl,
  } = details;

  const ratingsNReviewsData = {
    numReviews,
    rating,
    rankingData,
    ratingImageUrl,
    reviewRatingCount,
  };

  console.log(details, photos, reviews);

  return (
    <>
      <BookingLayout />
      <DetailsComponent>
        <ImageOverlayWrapper>
          <ImageLayout />
        </ImageOverlayWrapper>
      </DetailsComponent>
      <RatingsAndReviews data={ratingsNReviewsData} />

      {/* <DetailsGrid imageSwiper={<ImageSwiper photos={photos} />} /> */}
    </>
  );
}
