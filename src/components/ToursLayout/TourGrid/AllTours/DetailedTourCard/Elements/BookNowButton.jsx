import Button from '@mui/material/Button';
import React from 'react';
import Link from '@material/Link';

export default function BookNowButton({ url }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      LinkComponent={Link}
      href={`/tours/${url}`}
    >
      Book Now
    </Button>
  );
}
