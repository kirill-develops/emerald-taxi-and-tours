import Stack from '@mui/material/Stack';
import React, { useContext } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import ReviewCard from './ReviewCard';

export default function ReviewCards({}) {
  const {
    tourParams: { tripAdvisorReviews },
  } = useContext(ParamContext);

  return (
    <Stack spacing={2}>
      {tripAdvisorReviews.map((review) => (
        <ReviewCard
          key={review.id}
          reviewId={review.id}
        />
      ))}
    </Stack>
  );
}
