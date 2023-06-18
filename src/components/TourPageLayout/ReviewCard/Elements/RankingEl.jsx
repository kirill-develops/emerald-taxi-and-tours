import { Rating } from '@mui/material';
import React, { useContext } from 'react';
import { ReviewContext } from '..';

export default function RankingEl() {
  const { rating } = useContext(ReviewContext);

  return (
    <Rating
      defaultValue={Number(rating)}
      precision={0.1}
      size="small"
      readOnly
    />
  );
}
