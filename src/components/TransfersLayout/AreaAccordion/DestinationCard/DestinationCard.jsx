import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import React from 'react';
import GridCard from '@components/GridCard/GridCard';
import PricingText from './Elements/PricingText';

function getSubheader(areaLink, destination, area) {
  switch (areaLink) {
    case 'other':
      return destination.area;
    case 'norman_manley':
      return destination.parish;
    default:
      return area;
  }
}

export default React.memo(function TransferCard({ destinationData, areaData }) {
  const { name: areaName, link: areaLink, airportLink } = areaData;
  const { name, link, price, tripAdvisorPhotos, tripAdvisorReviews } =
    destinationData;

  const destinationURL = `/transfer/${airportLink}/${areaLink}/${link}#top`;

  const subheader = getSubheader(areaLink, destinationData, areaName);

  return (
    <GridCard
      variant="outlined"
      title={name}
      subheader={subheader}
      price={price.oneWay}
      picData={tripAdvisorPhotos?.[0]}
      url={destinationURL}
      reviews={tripAdvisorReviews}
    >
      <Divider variant="middle" />
      <CardContent>
        <PricingText price={price} />
      </CardContent>
    </GridCard>
  );
});
