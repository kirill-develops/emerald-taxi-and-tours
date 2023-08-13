import React from 'react';
import GridCard from '@components/GridCard/GridCard';
import { getToursUrl } from '@pages/tours/[area]/[tour]';
import RankingEl from '@elements/RankingEl';
import PickUpCardHeader from './Elements/PickUpCardHeader';

export default React.memo(function DetailedCard({ tour, sx, ...rest }) {
  const {
    name,
    area,
    link,
    areaLink,
    type,
    price,
    tripAdvisorPhotos,
    tripAdvisorDetails: { rating, num_reviews: numReviews } = {},
    tripAdvisorReviews,
  } = tour;
  const url = getToursUrl(areaLink, link);

  const destinationURL = `${url}#top`;

  const cardStyles = { borderRadius: 4, ...sx };

  return (
    <GridCard
      price={areaPrice.price}
      picData={tripAdvisorPhotos?.[0]}
      reviews={tripAdvisorReviews}
      subheader={area}
      subheaderVariant="cardCaption"
      title={name}
      titleVariant="cardTitle"
      type={type}
      url={destinationURL}
      sx={cardStyles}
      rankingEl={
        <RankingEl
          rating={rating}
          numReviews={numReviews}
        />
      }
      {...rest}
    >
      <PickUpCardHeader price={price} />
    </GridCard>
  );
});
