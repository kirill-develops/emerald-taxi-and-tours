import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import React from 'react';
import BookingLayout from '@components/BookingLayout/BookingLayout';
import { GridContainer } from '@elements/CustomGridEl';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import { useMediaQuery } from '@mui/material';
import DetailsWrapper from './DetailsWrapper';
import ImageOverlayWrapper from './Elements/ImageOverlayWrapper';
import ImagesLayout from './ImagesLayout';
import LocationDescription from './LocationDescriptionCard/LocationDescriptionCard';
import RatingsAndReviews from './RatingsAndReviewsCard';
import ImportantInfo from './Elements/ImportantInfo';
import ServiceDescription from './ServiceDescriptionCard/ServiceDescriptionCard';
import ReviewsLayout from './ReviewsLayout/ReviewsLayout';

function MaxWidthLayoutWrapper({ children, ...other }) {
  const isMdBreakpoint = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return isMdBreakpoint ? (
    <MaxWidthContainer {...other}>{children}</MaxWidthContainer>
  ) : (
    children
  );
}

export default function DetailedPageLayout() {
  const isXxsBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down('md'),
  );

  return (
    <>
      <BookingLayout />
      <DetailsWrapper>
        <ImageOverlayWrapper>
          <ImagesLayout />
        </ImageOverlayWrapper>
      </DetailsWrapper>
      <MaxWidthLayoutWrapper>
        <Stack rowGap={2}>
          <LocationDescription />
          {isXxsBreakpoint && (
            <>
              <RatingsAndReviews />
              <ServiceDescription />
            </>
          )}
          <GridContainer
            rowSpacing={{ xxs: 2 }}
            columnSpacing={{ md: 2 }}
          >
            {!isXxsBreakpoint && <RatingsAndReviews />}
            <ImportantInfo />
          </GridContainer>

          {!isXxsBreakpoint && <ServiceDescription />}
          <ReviewsLayout />
        </Stack>
      </MaxWidthLayoutWrapper>
    </>
  );
}
