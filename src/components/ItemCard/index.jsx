import React, { useContext } from 'react';
import GridCard from '@components/GridCard/';
import TourAreaContext from '@context/TourAreaContext';
import { getToursUrl } from '@pages/tours/[area]/[tour]';
import useCardSubheading from '../ToursByType/hooks/useCardSubheading';
import RankingEl from '@elements/RankingEl';

export default function ItemCard({ tour, ...rest }) {
  const {
    awards,
    name,
    area,
    link,
    areaLink,
    type,
    startingPoints,
    photoObj,
    priceLevel,
    cuisine,
    reviews,
    groups,
    subcategory,
    rating,
    numReviews,
  } = tour;

  const { link: pickupLink } = useContext(TourAreaContext);

  const startingPoint = startingPoints.find(
    (priceObj) => priceObj.link === pickupLink,
  );

  const url = getToursUrl(areaLink, link);

  const subheading = useCardSubheading({
    priceLevel,
    area,
    cuisine,
    groups,
    subcategory,
  });

  return (
    <GridCard
      awards={awards}
      price={startingPoint.price}
      picData={photoObj}
      reviews={reviews}
      subheader={subheading}
      subheaderVariant="cardCaption"
      title={name}
      titleVariant="cardTitle"
      type={type}
      url={url}
      rankingEl={
        <RankingEl
          rating={rating}
          numReviews={numReviews}
          textVariant={'cardCaption'}
        />
      }
      {...rest}
    />
  );
}
