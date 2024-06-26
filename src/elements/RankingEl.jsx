import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React, { useMemo } from 'react';
import { detailTypographyProps } from '../components/DetailImageWrapper/';

const RankingStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({ alignItems: 'center' }),
);

function StyledRating({ defaultValue, isDefault, color, outlineColor }) {
  const ratingStyles = {
    fontSize: isDefault ? '1.125rem' : '0.9rem',
    color: color,
    '& .MuiRating-iconEmpty': {
      color: outlineColor,
    },
  };

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
  ratingColor = (theme) => theme.palette.primary.main,
  ratingOutlineColor = (theme) => theme.palette.primary.main,
  children,
  ...other
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
        color={ratingColor}
        outlineColor={ratingOutlineColor}
        {...other}
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
