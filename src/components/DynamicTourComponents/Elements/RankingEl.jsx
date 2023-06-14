import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { detailTypographyProps } from '../DetailsComponent';

function RankingEl({ rating, numReviews, children }) {
  return (
    <Stack
      direction="row"
      spacing={0.5}
      sx={{ alignItems: 'center' }}
    >
      {children}
      <Rating
        defaultValue={Number(rating)}
        precision={0.1}
        size="small"
        readOnly
      />
      <Typography
        {...detailTypographyProps}
        fontWeight={500}
      >
        {numReviews && `${numReviews} reviews`}
      </Typography>
    </Stack>
  );
}

export default RankingEl;
