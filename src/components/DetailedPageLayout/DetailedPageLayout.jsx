import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React from 'react';
import BookingLayout from '@components/BookingLayout/BookingLayout';
import PageCard from '@elements/PageCard';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import { useMediaQuery } from '@mui/material';
import TransferTitle from './Elements/TransferTitle';
import TransferDescription from './Elements/TransferDescription';
import DetailsComponent from './DetailsComponent';
import ImageOverlayWrapper from './ImageOverlayWrapper';
import ImagesLayout from './ImagesLayout';
import Description from './Description';
import RatingsAndReviews from './RatingsAndReviews';
import ImportantInfo from './Elements/ImportantInfo';
import Reviews from './Reviews';
import ReviewCards from './ReviewCards';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: { xxs: 0, md: 2 },
  margin: 0,
};

const TransferDescriptionCard = styled(PageCard)(({ theme }) =>
  theme.unstable_sx({
    py: { xxs: 2, md: 4.5 },
    position: 'relative',
  }),
);

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
      <DetailsComponent>
        <ImageOverlayWrapper>
          <ImagesLayout />
        </ImageOverlayWrapper>
      </DetailsComponent>

      <MaxWidthLayoutWrapper>
        <Stack rowGap={2}>
          <TransferDescriptionCard>
            <TransferTitle />
            <TransferDescription />
          </TransferDescriptionCard>
          <GridContainer
            rowSpacing={{ xxs: 2, md: 3 }}
            columnSpacing={{ md: 3 }}
          >
            <GridItem xxs={12}>
              <Description />
            </GridItem>
            <GridItem
              xxs={12}
              md={5}
            >
              <RatingsAndReviews />
            </GridItem>
            <GridItem
              xxs={12}
              md={5}
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
