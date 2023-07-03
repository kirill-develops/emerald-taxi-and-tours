import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import React from 'react';
import BookingLayout from '@components/BookingLayout/BookingLayout';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import { useMediaQuery } from '@mui/material';
import DetailsWrapper from './DetailsWrapper';
import ImageOverlayWrapper from './ImageOverlayWrapper';
import ImagesLayout from './ImagesLayout';
import LocationDescription from './LocationDescriptionCard/LocationDescriptionCard';
import RatingsAndReviews from './RatingsAndReviews';
import ImportantInfo from './Elements/ImportantInfo';
import Reviews from './Reviews';
import ReviewCards from './ReviewCards';
import ServiceDescription from './ServiceDescriptionCard/ServiceDescriptionCard';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: { xxs: 0, md: 2 },
  margin: 0,
};

function ReviewsContainer({ children, sx, ...rest }) {
  return (
    <Container
      maxWidth="md"
      disableGutters
      sx={{ ...containerStyles, ...sx }}
      {...rest}
    >
      {children}
    </Container>
  );
}

function MaxWidthLayoutWrapper({ children, ...other }) {
  const isMdBreakpoint = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return isMdBreakpoint ? (
    <MaxWidthContainer {...other}>{children}</MaxWidthContainer>
  ) : (
    children
  );
}

export default function DetailedPageLayout() {
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
          <ServiceDescription />
          <GridContainer
            rowSpacing={{ xxs: 2 }}
            columnSpacing={{ md: 2 }}
          >
            <RatingsAndReviews />
            <ImportantInfo />
          </GridContainer>
          <ReviewsContainer>
            <Reviews />
            <ReviewCards />
          </ReviewsContainer>
        </Stack>
      </MaxWidthLayoutWrapper>
    </>
  );
}
