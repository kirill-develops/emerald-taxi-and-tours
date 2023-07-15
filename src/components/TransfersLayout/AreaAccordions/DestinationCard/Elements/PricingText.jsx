import Typography from '@mui/material/Typography';
import React from 'react';

export default function PricingText({ price }) {
  return (
    <>
      <Typography variant="subtitle2">
        One Way (1-4 people):{' '}
        <Typography
          as="span"
          color="primary"
        >
          ${price.oneWay}
        </Typography>
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        Additional Passenger:{' '}
        <Typography
          as="span"
          color="primary"
        >
          ${price.extraGuestOneWay}
        </Typography>{' '}
        /Each
      </Typography>
      <Typography variant="subtitle2">
        Round Trip (1-4 people):{' '}
        <Typography
          as="span"
          color="primary"
        >
          ${price.roundTrip}
        </Typography>
      </Typography>
      <Typography variant="subtitle2">
        Additional Passenger:{' '}
        <Typography
          as="span"
          color="primary"
        >
          ${price.extraGuestTwoWay}
        </Typography>{' '}
        /Each
      </Typography>
    </>
  );
}
