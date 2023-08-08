import React from 'react';
import GridCard from '@components/GridCard/GridCard';
import { getToursUrl } from '@pages/tours/[area]/[tour]';
import RankingEl from '@elements/RankingEl';

const cardContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  rowGap: 0.5,
};

export default function DetailedCard({ tour, sx, ...rest }) {
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

  const areaPrice = price.reduce((acc, priceObj) =>
    priceObj.price < acc ? (acc = priceObj.price) : acc,
  );

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
      rankingEl={
        <RankingEl
          rating={rating}
          numReviews={numReviews}
        />
      }
      {...rest}
    />
  );
}
