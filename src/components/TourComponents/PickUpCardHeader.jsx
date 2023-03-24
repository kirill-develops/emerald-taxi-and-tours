import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { tourData } from '@data/tours';
import { useTour } from '@state/useTour';

function checkObjectValues(obj) {
  const trueProps = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop]) {
      trueProps.push(prop);
    }
  }
  return trueProps;
}

function PickUpCardHeader({ price }) {
  const [state, actions] = useTour();
  const { filterStartLocation } = state;

  const startLocationFilter = checkObjectValues(filterStartLocation);
  const startLocations = startLocationFilter.map((selection) => {
    const foundSelection = price.find((obj) => obj.link === selection);

    const notFoundName =
      !foundSelection &&
      tourData.reduce((acc, obj) => {
        const foundPrice = obj.price.find(
          (price) => price.link === selection && price.name,
        );
        return acc || foundPrice?.name || false;
      }, false);

    return foundSelection
      ? foundSelection
      : { name: notFoundName, price: 'notFound', link: selection };
  });

  const startArrayEl = startLocations.map((each) => {
    if (each.price !== 'notFound') {
      return (
        <Typography
          sx={{ pl: 2 }}
          key={each.link}
        >
          Pick-Up: {each.name} ${each.price}
        </Typography>
      );
    } else {
      return (
        <Typography
          sx={{ pl: 2 }}
          key={each.link}
        >
          Service unavailable from {each.name} at this time
        </Typography>
      );
    }
  });

  return (
    Boolean(startLocationFilter.length > 0) && <Stack>{startArrayEl}</Stack>
  );
}

export default PickUpCardHeader;
