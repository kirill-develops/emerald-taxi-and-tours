import Button from '@mui/material/Button';
import React from 'react';
import Link from '@material/Link';

export default function BookNowButton({ url, ...rest }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      LinkComponent={Link}
      href={url}
      {...rest}
    >
      Book Now
    </Button>
  );
}
