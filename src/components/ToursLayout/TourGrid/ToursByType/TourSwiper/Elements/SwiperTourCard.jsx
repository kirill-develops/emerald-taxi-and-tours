import React, { useMemo } from 'react';
import GridCard from '@components/GridCard/GridCard';
import { getToursUrl } from '@pages/tours/[area]/[tour]';

export default function SwiperTourCard({ tour, sx, ...rest }) {
  const { name, area, link, price, areaLink, tripAdvisorPhotos } = tour;

  const areaPrice = price.reduce((acc, priceObj) =>
    priceObj.price < acc ? (acc = priceObj.price) : acc,
  );

  const url = getToursUrl(areaLink, link);

  const cardStyles = useMemo(
    () => ({ height: { xxs: 155, sm: 190 }, ...sx }),
    [sx],
  );

  return (
    <GridCard
      disableRipple
      noWrap
      noGrid
      price={areaPrice.price}
      picData={tripAdvisorPhotos[0]}
      bookNowUrl={url}
      name={name}
      area={area}
      sx={cardStyles}
      {...rest}
    />
  );
}
