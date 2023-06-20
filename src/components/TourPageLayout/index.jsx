import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import React, { useContext } from 'react';
import BookingLayout from '@components/BookingLayout/BookingLayout';
import { ParamContext } from '@Form/FormContextProvider';
import DetailsComponent from './DetailsComponent/index';
import ImageLayout from './ImagesLayout/';
import ImageOverlayWrapper from './ImageOverlayWrapper';
import RatingsAndReviews from './RatingsAndReviews/';
import Reviews from './Reviews';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import Description from './Description';
import ReviewCards from './ReviewCards';
import ImportantInfo from './ImportantInfo';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import { useMediaQuery } from '@mui/material';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: { xxs: 0, md: 2 },
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

export default function DynamicTourLayout() {
  const { tourParams } = useContext(ParamContext);

  const { tripAdvisorDetails: details, tripAdvisorReviews: reviews } =
    tourParams;

  return (
    <>
      <BookingLayout />
      <DetailsComponent>
        <ImageOverlayWrapper>
          <ImageLayout />
        </ImageOverlayWrapper>
      </DetailsComponent>
      <MaxWidthLayoutWrapper>
        <Stack spacing={2}>
          <GridContainer
            rowSpacing={{ xxs: 2, md: 3 }}
            columnSpacing={{ md: 3 }}
          >
            <Description />
            <RatingsAndReviews />
            <GridItem
              xxs={12}
              md={4}
            >
              <ImportantInfo />
            </GridItem>
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
