import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import React from 'react';

const RankingStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({ alignItems: 'center' }),
);

const ratingStyles = { fontSize: '1rem' };

function StyledRating({ defaultValue }) {
  return (
    <Rating
      defaultValue={defaultValue}
      precision={0.1}
      sx={ratingStyles}
      readOnly
    />
  );
}

export default function RankingEl({
  rating,
  numReviews,
  textVariant = 'body2',
  children,
}) {
  return rating ? (
    <RankingStack
      direction="row"
      spacing={0.85}
    >
      {children}
      <StyledRating defaultValue={Number(rating)} />
      <Typography
        variant={textVariant}
        noWrap
      >
        {numReviews &&
          `${numReviews}
          ${textVariant !== 'smallCaption' ? ` reviews` : ''}
          `}
      </Typography>
    </RankingStack>
  ) : null;
}
