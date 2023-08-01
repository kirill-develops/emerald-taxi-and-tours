import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import React, { useMemo } from 'react';
import { detailTypographyProps } from '../components/DetailedPageLayout/DetailsWrapper';

const RankingStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({ alignItems: 'center' }),
);

function StyledRating({ defaultValue, isDefault }) {
  const ratingStyles = { fontSize: isDefault ? '1.125rem' : '0.9rem' };

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
  textVariant = detailTypographyProps.variant,
  children,
}) {
  const isDefault = useMemo(
    () => textVariant === detailTypographyProps.variant,
    [textVariant],
  );

  const rankingString = useMemo(
    () =>
      numReviews &&
      `${numReviews}
          ${isDefault ? ` reviews` : ''}
          `,
    [numReviews, isDefault],
  );

  return rating ? (
    <RankingStack
      direction="row"
      spacing={0.85}
    >
      {children}
      <StyledRating
        defaultValue={Number(rating)}
        isDefault={isDefault}
      />
      <Typography
        variant={textVariant}
        noWrap
      >
        {rankingString}
      </Typography>
    </RankingStack>
  ) : null;
}
