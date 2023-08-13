import React, { useContext } from 'react';
import GridCard from '@components/GridCard/GridCard';
import TourAreaContext from '@context/TourAreaContext';
import { getToursUrl } from '@pages/tours/[area]/[tour]';
import useCardSubheading from '../../ToursLayout/TourGrid/hooks/useCardSubheading';
import RankingEl from '@elements/RankingEl';

export default function ItemCard({ tour, sx, ...rest }) {
  const {
    name,
    area,
    link,
    areaLink,
    type,
    price,
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

  const areaPrice = price.find((priceObj) => priceObj.link === pickupLink);

  const url = getToursUrl(areaLink, link);

  const subheading = useCardSubheading({
    priceLevel,
    area,
    cuisine,
    groups,
    subcategory,
  });

  const cardStyles = { borderRadius: 4, ...sx };

  return (
    <GridCard
      price={areaPrice.price}
      picData={photoObj}
      reviews={reviews}
      subheader={subheading}
      subheaderVariant="cardCaption"
      title={name}
      titleVariant="cardTitle"
      type={type}
      url={url}
      sx={cardStyles}
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
