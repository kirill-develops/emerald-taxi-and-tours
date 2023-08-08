import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext } from 'react';
import BookingLayout from './BookingLayout/BookingLayout';
import DetailsWrapper from './DetailsWrapper';
import ImagesLayout from './ImagesLayout';
import ImageOverlayWrapper from './Elements/ImageOverlayWrapper';
import ImportantInfo from './Elements/ImportantInfo';
import LocationDescription from './LocationDescriptionCard/LocationDescriptionCard';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import PricingCard from './PricingCard';
import RatingsAndReviews from './RatingsAndReviewsCard';
import ImportantInfo from './Elements/ImportantInfo';
import ServiceDescription from './ServiceDescriptionCard/ServiceDescriptionCard';
import ReviewsLayout from './ReviewsLayout/ReviewsLayout';
import CardStack from './Elements/CardStack';

function MaxWidthLayoutWrapper({ children, ...other }) {
  const isBelowMdBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down('md'),
  );

  return (
    <MaxWidthContainer
      disableGutters={isBelowMdBreakpoint}
      rowGap={2}
      {...other}
    >
      {children}
    </MaxWidthContainer>
  );
}

export default function DetailedPageLayout() {
  const isBelowMdBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down('md'),
  );

  return (
    <>
      <BookingLayout />
      {/* HERO SECTION */}
      <DetailsWrapper>
        <ImageOverlayWrapper>
          <ImagesLayout />
        </ImageOverlayWrapper>
      </DetailsWrapper>
      {/* Next Section */}
      <Stack
        spacing={2}
        alignItems="center"
      >
        <MaxWidthLayoutWrapper>
          <LocationDescription />
          {isBelowMdBreakpoint && (
            <>
              <RatingsAndReviews />
              <ServiceDescription />
            </>
          )}
        </MaxWidthLayoutWrapper>

        {/* Tablet */}
        <MaxWidthLayoutWrapper maxWidth="lg">
          <CardStack isBreakpoint={isBelowMdBreakpoint}>
            {!isBelowMdBreakpoint && <RatingsAndReviews />}
            <ImportantInfo />
            <PricingCard />
          </CardStack>
        </MaxWidthLayoutWrapper>
        <MaxWidthLayoutWrapper>
          {!isBelowMdBreakpoint && <ServiceDescription />}
          <ReviewsLayout />
        </MaxWidthLayoutWrapper>
      </Stack>
    </>
  );
}
