import React from 'react';
import GridCard from '@components/GridCard/';
import { getToursUrl } from '@pages/tours/[area]/[tour]';
import RankingEl from '@elements/RankingEl';
import PickUpCardHeader from './Elements/PickUpCardHeader';
import { useTour } from '../../../../layouts/ToursLayout/hooks/useTour';

function getStartingPointPrice(startingPoints, filterStartLocation) {
  return startingPoints.reduce((lowestPrice, startingPoint) => {
    const startLocationActive =
      Object.values(filterStartLocation).includes(true);

    const startLocationMatches =
      filterStartLocation[startingPoint?.link] === true;

    if (!startLocationActive || startLocationMatches) {
      return Math.min(lowestPrice, startingPoint.basePrice.value);
    }

    return lowestPrice;
  }, Number.MAX_SAFE_INTEGER);
}

export default React.memo(function DetailedCard({ tour, ...rest }) {
  const {
    name,
    area,
    link,
    area_link: areaLink,
    type,
    starting_points: startingPoints,
    tripAdvisorPhotos,
    tripAdvisorDetails: { awards, rating, num_reviews: numReviews } = {},
    tripAdvisorReviews,
  } = tour;
  const [{ filterStartLocation }] = useTour();

  const url = getToursUrl(areaLink, link);
  const destinationURL = `${url}#top`;

  const startingPointPrice = getStartingPointPrice(
    startingPoints,
    filterStartLocation,
  );

  return (
    <GridCard
      awards={awards}
      price={startingPointPrice}
      picData={tripAdvisorPhotos?.[0]}
      reviews={tripAdvisorReviews}
      subheader={area}
      title={name}
      type={type}
      url={destinationURL}
      rankingEl={
        <RankingEl
          rating={rating}
          numReviews={numReviews}
        />
      }
      {...rest}
    >
      <PickUpCardHeader startingPoints={startingPoints} />
    </GridCard>
  );
});
