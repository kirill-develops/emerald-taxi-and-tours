import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import DetailImageWrapper from '../../components/DetailImageWrapper';
import MultiImageBanner from '../../components/MultiImageBanner';
import PricingCard from '../../components/PricingCard';
import RatingsAndReviews from '../../components/RatingsAndReviewsCard';
import LocationDescription from './Elements/LocationDescriptionCard';
import PriceTable from '../../components/PriceTable';
import ReviewsLayout from '../../components/Reviews';
import ServiceDescription from '../../components/ServiceDescriptionCard';
import CardStack from './Elements/CardStack';
import ImageOverlayWrapper from './Elements/ImageOverlayWrapper';
import ImportantInfo from './Elements/ImportantInfo';

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

  return (
    <>
      {/* HERO SECTION */}
      <DetailImageWrapper>
        <ImageOverlayWrapper>
          <MultiImageBanner />
        </ImageOverlayWrapper>
      </DetailImageWrapper>
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
    </>
  );
}
