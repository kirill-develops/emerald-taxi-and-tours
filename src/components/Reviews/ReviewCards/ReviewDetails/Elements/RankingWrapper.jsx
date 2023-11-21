import React, { useContext } from 'react';
import ReviewContext from '@context/ReviewContext';
import RankingEl from '@elements/RankingEl';

export default function RankingWrapper() {
  const { rating } = useContext(ReviewContext);

  return (
    <RankingEl
      rating={Number(rating)}
      ratingColor={(theme) => theme.palette.secondary.main}
      ratingOutlineColor={(theme) => theme.palette.secondary.main}
    />
  );
}
