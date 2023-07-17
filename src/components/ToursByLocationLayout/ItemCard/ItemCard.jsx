import React, { useContext } from 'react';
import GridCard from '@components/GridCard/GridCard';
import TourAreaContext from '@context/TourAreaContext';
import { getToursUrl } from '@pages/tours/[area]/[tour]';

export default function ItemCard({ tour, sx, ...rest }) {
  const { name, area, link, areaLink, type, price, photoObj } = tour;

  const { link: pickupLink } = useContext(TourAreaContext);

  const areaPrice = price.find((priceObj) => priceObj.link === pickupLink);

  const url = getToursUrl(areaLink, link);

  return (
    <GridCard
      url={url}
      type={type}
      price={areaPrice.price}
      picData={photoObj}
      name={name}
      area={area}
      {...rest}
    />
  );
}
