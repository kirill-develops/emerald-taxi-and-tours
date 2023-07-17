import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import React, { useState } from 'react';
import PriceTable from './Elements/PriceTable';
import GridCard from '@components/GridCard/GridCard';
import ExpandMoreButton from './Elements/ExpandMoreButton';

import { getToursUrl } from '@pages/tours/[area]/[tour]';
import CardDescription from './Elements/CardDescription';

const cardContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  rowGap: 1,
  pb: '0 !important',
};

export default function DetailedCard({ tour, sx, ...rest }) {
  const {
    name,
    area,
    link,
    areaLink,
    type,
    price,
    description,
    tripAdvisorPhotos,
  } = tour;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  const url = getToursUrl(areaLink, link);

  const areaPrice = price.reduce((acc, priceObj) =>
    priceObj.price < acc ? (acc = priceObj.price) : acc,
  );

  return (
    <GridCard
      disableRipple
      type={type}
      price={areaPrice.price}
      picData={tripAdvisorPhotos[0]}
      bookNowUrl={url}
      name={name}
      area={area}
      cardActions={
        <ExpandMoreButton
          expanded={expanded}
          handleExpandClick={handleExpandClick}
        />
      }
      {...rest}
    >
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent sx={cardContentStyles}>
          <Stack rowGap={2}>
            <CardDescription description={description} />
            <PriceTable pricesArr={price} />
            <Divider />
          </Stack>
        </CardContent>
      </Collapse>
    </GridCard>
  );
}
