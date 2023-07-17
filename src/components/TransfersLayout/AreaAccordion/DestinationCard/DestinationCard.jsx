import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import React, { useState } from 'react';
import GridCard from '@components/GridCard/GridCard';
import ExpandMoreButton from '../../../ToursLayout/TourGrid/AllTours/DetailedTourCard/Elements/ExpandMoreButton';
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
  const { name, link, price, tripAdvisorPhotos } = destinationData;

  const destinationURL = `/transfer/${airportLink}/${areaLink}/${link}`;

  const subheader = getSubheader(areaLink, destinationData, areaName);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <GridCard
      variant="outlined"
      disableRipple
      name={name}
      area={subheader}
      price={price.oneWay}
      picData={tripAdvisorPhotos?.[0]}
      bookNowUrl={destinationURL}
      cardActions={
        <ExpandMoreButton
          expanded={expanded}
          handleExpandClick={handleExpandClick}
        />
      }
    >
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          <PricingText price={price} />
        </CardContent>
        <Divider variant="middle" />
      </Collapse>
    </GridCard>
  );
});
