import React, { useMemo } from 'react';
import { getToursUrl } from '@pages/tours/[area]/[tour]';
import SmallCard from '@components/GridCard/SmallCard/SmallCard';
import RankingEl from '@elements/RankingEl';
import useCardSubheading from '../../hooks/useCardSubheading';

export default function SwiperTourCard({ tour, sx, ...rest }) {
  const {
    name,
    area,
    link,
    starting_points: startingPoints,
    area_link: areaLink,
    tripAdvisorPhotos,
    tripAdvisorDetails: {
      cuisine,
      groups,
      price_level: priceLevel,
      rating,
      num_reviews: numReviews,
      subcategory,
    } = {},
  } = tour;

  const lowestPrice = useMemo(
    () =>
      startingPoints.reduce(
        (lowestPrice, startingPoint) =>
          startingPoint.price < lowestPrice ? startingPoint.price : lowestPrice,
        startingPoints[0].price,
      ),
    [startingPoints],
  );

  const url = useMemo(() => getToursUrl(areaLink, link), [areaLink, link]);

  const subheading = useCardSubheading({
    priceLevel,
    area,
    cuisine,
    groups,
    subcategory,
  });

  const destinationURL = `${url}#top`;

  return (
    <SmallCard
      noWrap
      price={lowestPrice}
      picData={tripAdvisorPhotos[0]}
      title={name}
      subheader={subheading}
      url={destinationURL}
      sx={{ height: '8.75rem' }}
      rankingEl={
        <RankingEl
          rating={rating}
          numReviews={numReviews}
          textVariant="smallCaption"
          ratingColor={(theme) => theme.palette.secondary.main}
          ratingOutlineColor={(theme) => theme.palette.secondary.main}
        />
      }
      {...rest}
    />
  );
}
