import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import dynamic from 'next/dynamic';
import React from 'react';
import DetailsWrapper from './DetailsWrapper';
import ImagesLayout from './ImagesLayout';
import ImageOverlayWrapper from './Elements/ImageOverlayWrapper';
import ImportantInfo from './Elements/ImportantInfo';
import LocationDescription from './LocationDescriptionCard/LocationDescriptionCard';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import PricingCard from './PricingCard';
import PriceTable from './PriceTable/PriceTable';
import RatingsAndReviews from './RatingsAndReviewsCard';
import ServiceDescription from './ServiceDescriptionCard/ServiceDescriptionCard';
import ReviewsLayout from './ReviewsLayout/ReviewsLayout';
import CardStack from './Elements/CardStack';
const BookingLayout = dynamic(() => import('./BookingLayout/BookingLayout'));
const StripeElementsProvider = dynamic(() =>
  import('./StripeElementsProvider/StripeElementsProvider'),
);

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

const styleStacks = { pb: 3 };

function StyledStack({ children, ...rest }) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      sx={styleStacks}
    >
      {children}
    </Stack>
  );
}

export default function DetailedPageLayout() {
  const isBelowMdBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down('md'),
  );

  console.log('rerender');

  return (
    <>
      <StripeElementsProvider>
        <BookingLayout />
        {/* HERO SECTION */}
        <DetailsWrapper>
          <ImageOverlayWrapper>
            <ImagesLayout />
          </ImageOverlayWrapper>
        </DetailsWrapper>
        <StyledStack>
          {/* Next Section */}
          <MaxWidthLayoutWrapper>
            <LocationDescription />
            {isBelowMdBreakpoint && (
              <>
                <RatingsAndReviews />
                <ServiceDescription />
              </>
            )}
          </MaxWidthLayoutWrapper>
          {/* Tablet Horizontal 3 Card Component */}
          <MaxWidthLayoutWrapper maxWidth="lg">
            <CardStack isBreakpoint={isBelowMdBreakpoint}>
              {!isBelowMdBreakpoint && <RatingsAndReviews />}
              <ImportantInfo />
              <PriceTable />
              <PricingCard />
            </CardStack>
          </MaxWidthLayoutWrapper>
          {/* Next Section */}
          <MaxWidthLayoutWrapper>
            {!isBelowMdBreakpoint && <ServiceDescription />}
            <ReviewsLayout />
          </MaxWidthLayoutWrapper>
        </StyledStack>
      </StripeElementsProvider>
    </>
  );
}
