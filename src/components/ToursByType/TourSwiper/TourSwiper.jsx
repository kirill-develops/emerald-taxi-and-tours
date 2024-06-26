import { SwiperSlide } from 'swiper/react';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import CardTitle from '@elements/CardTitle';
import SwiperTourCard from './Elements/SwiperTourCard';
import PageSwiper from '../../../elements/PageSwiper/PageSwiper';

const StyledStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    flexDirection: { xxs: 'column', md: 'row' },
    justifyContent: 'space-between',
    width: '100%',
    columnGap: 5,
    rowGap: 4.5,
  }),
);

const StyledCardTitle = styled(CardTitle)(({ theme }) =>
  theme.unstable_sx({
    typography: 'categoryTitle',
    color: theme.palette.secondary.containerText,
  }),
);

const StyledContainer = styled((props) => (
  <Container
    maxWidth={false}
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    flexBasis: '25%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 1.5,
    justifyContent: { md: 'center' },
  }),
);

const Caption = styled((props) => (
  <Typography
    variant="categoryDescription"
    {...props}
  />
))(({ theme }) => theme.unstable_sx({ color: theme.palette.text.secondary }));

const buttonProps = { sx: { top: '40%' } };

const wrapperProps = {
  sx: {
    width: { md: '75%' },
    flexBasis: '75%',
    flexGrow: 4,
  },
};

export default React.memo(function TourSwiper({ tours, type, caption }) {
  const isLessMdBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down('md'),
  );

  const key = type.replace(/\s/g, '_');

  return (
    <StyledStack>
      <StyledContainer disableGutters={!isLessMdBreakpoint}>
        <StyledCardTitle>{type}s</StyledCardTitle>
        <Caption>{caption}</Caption>
      </StyledContainer>
      <PageSwiper
        id={key}
        slidesPerView={1}
        wrapperProps={wrapperProps}
        buttonProps={buttonProps}
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.link}>
            <SwiperTourCard tour={tour} />
          </SwiperSlide>
        ))}
      </PageSwiper>
    </StyledStack>
  );
});
