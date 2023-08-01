import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import React from 'react';
import { detailTypographyProps } from '../components/DetailedPageLayout/DetailsWrapper';

const RankingStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({ alignItems: 'center' }),
);

export default function RankingEl({ rating, numReviews, children }) {
  return rating ? (
    <RankingStack
      direction="row"
      spacing={0.5}
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
        noWrap
      >
        {numReviews && `${numReviews} reviews`}
      </Typography>
    </RankingStack>
  ) : null;
}
