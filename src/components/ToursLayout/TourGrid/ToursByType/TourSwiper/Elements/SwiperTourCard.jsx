import React from 'react';
import GridCard from '@components/GridCard/GridCard';
import { getToursUrl } from '@pages/tours/[area]/[tour]';

export default function SwiperTourCard({ tour, sx, ...rest }) {
  const { name, area, link, type, price, areaLink, tripAdvisorPhotos } = tour;

  const areaPrice = price.reduce((acc, priceObj) =>
    priceObj.price < acc ? (acc = priceObj.price) : acc,
  );

  const url = getToursUrl(areaLink, link);

  return (
    <GridCard
      type={type}
      price={areaPrice.price}
      picData={tripAdvisorPhotos[0]}
      bookNowUrl={url}
      name={name}
      area={area}
      sx={{ height: 190, ...sx }}
      disableRipple
      {...rest}
    />
  );
}
