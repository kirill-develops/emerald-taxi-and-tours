import Stack from '@mui/material/Stack';
import React, { createContext, useContext, useMemo } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import PageCard from '@elements/PageCard';
import AvatarEl from './Elements/AvatarEl';
import ReviewDetails from './ReviewDetails';
import DescriptionText from './Elements/DescriptionText';
import ReviewedDateText from './Elements/ReviewedText';

export const ReviewContext = createContext();

function ReviewStack({ children, sx, ...rest }) {
  return (
    <Stack
      rowGap={1.5}
      columnGap={2}
      direction={{ xxs: 'column', md: 'row' }}
      sx={{ position: 'relative', ...sx }}
      {...rest}
    >
      {children}
    </Stack>
  );
}

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
          <ReviewStack>
            <AvatarEl
              showName
              showLocation
            />
            <Stack sx={{ flexBasis: '90%' }}>
              <ReviewDetails />
              <DescriptionText />
              <ReviewedDateText />
            </Stack>
          </ReviewStack>
        </PageCard>
      </ReviewContext.Provider>
    ),
    [contextValue],
  );
}
