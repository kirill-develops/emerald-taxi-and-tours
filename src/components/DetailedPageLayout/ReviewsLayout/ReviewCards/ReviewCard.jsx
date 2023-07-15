import Stack from '@mui/material/Stack';
import React, { useContext, useMemo } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import PageCard from '@elements/PageCard';
import AvatarEl from './Elements/AvatarEl';
import ReviewDetails from './ReviewDetails';
import DescriptionText from '@Elements/DescriptionText';
import ReviewedDateText from './Elements/ReviewedText';
import ReviewContext from '@context/ReviewContext';

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
  const { tripAdvisorReviews } = useContext(ParamContext);

  const contextValue = useMemo(
    () => tripAdvisorReviews.find((review) => review.id === reviewId),
    [reviewId, tripAdvisorReviews],
  );

  return useMemo(
    () => (
      <ReviewContext.Provider value={contextValue}>
        <PageCard sx={{ maxWidth: { md: 750 } }}>
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
