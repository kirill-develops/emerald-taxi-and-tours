import Typography from '@mui/material/Typography';
import React from 'react';
import { useTour } from '../../state/useSort';

function checkObjectValues(obj) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop]) {
      return prop;
    }
  }
  return false;
}

function PickUpCardHeader() {
  const [state, actions] = useTour();
  const { filterStartLocation } = state;

  const startLocationFilter = checkObjectValues(filterStartLocation);
  const startLocationObj =
    startLocationFilter &&
    price.find((obj) => obj.link === startLocationFilter);

  return (
    Boolean(startLocationFilter) && (
      <Typography sx={{ pl: 2 }}>
        Pick-Up: {startLocationObj.name} ${startLocationObj.price}
      </Typography>
    )
  );
}

export default PickUpCardHeader;
