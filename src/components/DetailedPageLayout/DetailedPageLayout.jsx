import React from 'react';
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
import BookingLayout from './BookingLayout/BookingLayout';

function MaxWidthLayoutWrapper({ children, ...other }) {
  const isMdBreakpoint = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <MaxWidthContainer
      disableGutters={!isMdBreakpoint}
      rowGap={2}
      {...other}
    >
      {children}
    </MaxWidthContainer>
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
      </MaxWidthLayoutWrapper>
    </>
  );
}
