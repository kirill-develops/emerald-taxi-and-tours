import React, { useMemo } from 'react';
import { getToursUrl } from '@pages/tours/[area]/[tour]';
import SmallCard from '@components/GridCard/SmallCard';
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

  const areaPrice = startingPoints.reduce(
    (acc, startingPoint) =>
      startingPoint.price < acc ? startingPoint.price : acc,
    startingPoints[0].price,
  );

  const url = useMemo(() => getToursUrl(areaLink, link), [areaLink, link]);

  const cardStyles = useMemo(
    () => ({
      height: { xxs: 155 },
      backgroundColor: (theme) => theme.palette.secondary.main,
      color: (theme) => theme.palette.tertiary.container,
      ...sx,
    }),
    [sx],
  );

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
      noGrid
      price={areaPrice}
      picData={tripAdvisorPhotos[0]}
      title={name}
      subheader={subheading}
      variant="outlined"
      url={destinationURL}
      rankingEl={
        <RankingEl
          rating={rating}
          numReviews={numReviews}
          textVariant="smallCaption"
          ratingColor={(theme) => theme.palette.tertiary.container}
          ratingOutlineColor={(theme) => theme.palette.tertiary.container}
        />
      }
      sx={cardStyles}
      {...rest}
    />
  );
}
