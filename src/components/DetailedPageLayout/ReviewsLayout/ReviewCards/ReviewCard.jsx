import Stack from '@mui/material/Stack';
import React, { useContext, useMemo } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import PageCard from '@elements/PageCard';
import AvatarEl from './Elements/AvatarEl';
import ReviewDetails from './ReviewDetails';
import DescriptionText from '@elements/DescriptionText';
import ReviewedDateText from './Elements/ReviewedText';
import ReviewContext from '@context/ReviewContext';

const pageCardStyles = { maxWidth: { md: 750 } };

const innerStackStyles = { flexBasis: '90%' };

function ReviewStack({ children, sx, ...rest }) {
  const reviewStackStyles = useMemo(
    () => ({ position: 'relative', ...sx }),
    [sx],
  );

  return (
    <Stack
      rowGap={1.5}
      columnGap={2}
      direction={{ xxs: 'column', md: 'row' }}
      sx={reviewStackStyles}
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
        <PageCard
          sx={pageCardStyles}
          id={contextValue.id}
        >
          <ReviewStack>
            <AvatarEl
              showName
              showLocation
            />
            <Stack sx={innerStackStyles}>
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
