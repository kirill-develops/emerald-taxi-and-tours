import Stack from '@mui/material/Stack';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import ReviewCard from './ReviewCard';

export default function ReviewCards({}) {
  const { tripAdvisorReviews } = useContext(ParamContext);

  return (
    <Stack spacing={{ xxs: 2, md: 0 }}>
      {tripAdvisorReviews.map((review) => (
        <ReviewCard
          key={review.id}
          reviewId={review.id}
        />
      ))}
    </Stack>
  );
}
