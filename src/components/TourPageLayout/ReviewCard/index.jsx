import Stack from '@mui/material/Stack';
import React, { createContext, useContext, useMemo } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import PageCard from '@elements/PageCard';
import AvatarEl from './Elements/AvatarEl';

export const ReviewContext = createContext();

export default function ReviewCard({ reviewId, ...other }) {
  const {
    tourParams: { tripAdvisorReviews },
  } = useContext(ParamContext);

  const contextValue = useMemo(
    () => tripAdvisorReviews.find((review) => review.id === reviewId),
    [reviewId, tripAdvisorReviews],
  );

  return useMemo(
    () => (
      <ReviewContext.Provider value={contextValue}>
        <PageCard>
          <Stack>
            <AvatarEl
              showName
              showLocation
            />
          </Stack>
        </PageCard>
      </ReviewContext.Provider>
    ),
    [contextValue],
  );
}
