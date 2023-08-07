import React, { useMemo } from 'react';
import { getToursUrl } from '@pages/tours/[area]/[tour]';
import SmallCard from '@components/GridCard/SmallCard';
import RankingEl from '@elements/RankingEl';
import useCardSubheading from '../../../hooks/useCardSubheading';

export default function SwiperTourCard({ tour, sx, ...rest }) {
  const {
    name,
    area,
    link,
    price,
    areaLink,
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

  const areaPrice = price.reduce(
    (acc, priceObj) => (priceObj.price < acc ? priceObj.price : acc),
    price[0].price,
  );

  const url = useMemo(() => getToursUrl(areaLink, link), [areaLink, link]);

  const cardStyles = useMemo(() => ({ height: { xxs: 155 }, ...sx }), [sx]);

  const subheading = useCardSubheading({
    priceLevel,
    area,
    cuisine,
    groups,
    subcategory,
  });

  return (
    <SmallCard
      noWrap
      noGrid
      price={areaPrice}
      picData={tripAdvisorPhotos[0]}
      url={url}
      title={name}
      subheader={subheading}
      rankingEl={
        <RankingEl
          rating={rating}
          numReviews={numReviews}
          textVariant="smallCaption"
        />
      }
      sx={cardStyles}
      {...rest}
    />
  );
}
