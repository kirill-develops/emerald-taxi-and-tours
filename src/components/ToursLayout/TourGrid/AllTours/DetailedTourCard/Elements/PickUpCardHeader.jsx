import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import { tourData } from '@data/tours';
import { useTour } from '../../../../hooks/useTour';

function checkObjectValues(obj) {
  const trueProps = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop]) {
      trueProps.push(prop);
    }
  }
  return trueProps;
}

export default React.memo(function PickUpCardHeader({ price }) {
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
      Boolean(startLocationFilter.length > 0) && (
        <CardContent sx={{ pt: 0 }}>
          <Divider sx={{ mb: 2 }} />
          <Stack spacing={0.5}>{startArrayEl}</Stack>
        </CardContent>
      ),
    [startArrayEl, startLocationFilter.length],
  );
});
