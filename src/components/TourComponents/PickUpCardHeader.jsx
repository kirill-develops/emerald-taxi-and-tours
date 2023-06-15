import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import { tourData } from '@data/tours';
import { useTour } from '@state/useTour';

const typographyStyles = { pl: 2 };

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
  const [{ filterStartLocation }] = useTour();

  const startLocationFilter = checkObjectValues(filterStartLocation);

  const startLocations = useMemo(
    () =>
      startLocationFilter.map((selection) => {
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
      }),
    [price, startLocationFilter],
  );

  const startArrayEl = useMemo(
    () =>
      startLocations.map((each) => {
        const stringValue =
          each.price !== 'notFound'
            ? `Pick-Up: ${each.name} $${each.price}`
            : `Service unavailable from ${each.name} at this time`;

        return (
          <Typography
            sx={typographyStyles}
            variant="caption"
            key={each.link}
          >
            {stringValue}
          </Typography>
        );
      }),
    [startLocations],
  );

  return useMemo(
    () =>
      Boolean(startLocationFilter.length > 0) && <Stack>{startArrayEl}</Stack>,
    [startArrayEl, startLocationFilter.length],
  );
}

export default React.memo(PickUpCardHeader);
