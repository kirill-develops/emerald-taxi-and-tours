import React, { useCallback, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import IconButton from '@mui/material/IconButton';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';

import 'swiper/swiper.min.css';

import { GridItem } from '@elements/CustomGridEl';
import { useTour } from '@state/useTour';
import { gridSpacingProps } from '@material/theme';
import DividerRight from '@elements/DividerRight';
import SectionTitle from '@elements/SectionTitle';
import SwiperTourCard from './SwiperTourCard.jsx/SwiperTourCard';
import useSortData from '../hooks/useSortData';

const TourSwiper = styled(Swiper)(({ theme }) =>
  theme.unstable_sx({
    padding: '3.5px !important',
    marginTop: { ...gridSpacingProps },
  }),
);

const TourSwiperSlide = styled(SwiperSlide)({
  // height: 'unset !important',
});

const iconButtonStyles = (position) => ({
  position: 'absolute',
  top: '50%',
  padding: 0.5,
  [position]: 10,
  zIndex: 10,
  backdropFilter: 'brightness(50%)',
});

const gridItemStyles = {
  width: '100%',
  flexDirection: 'column',
  marginBottom: 2,
};

const navBackButtonStyles = (isBeginning) => ({
  ...iconButtonStyles('left'),
  display: isBeginning ? 'none' : 'inline-flex',
});

const navNextButtonStyles = (isEnd) => ({
  ...iconButtonStyles('right'),
  display: isEnd ? 'none' : 'inline-flex',
});

const TourSwiperComponent = React.memo(({ tours, type }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const muiBreakpoints = useTheme().breakpoints.values;
  const breakpoints = useMemo(
    () => ({
      [muiBreakpoints.md]: { slidesPerView: 2 },
      [muiBreakpoints.lg]: { slidesPerView: 3 },
      [muiBreakpoints.xl]: { slidesPerView: 4 },
    }),
    [muiBreakpoints],
  );

  const handleSwiperPosition = useCallback((swiper) => {
    setIsBeginning(swiper.isBeginning ? true : false);
    setIsEnd(swiper.isEnd ? true : false);
  }, []);

  return (
    <GridItem
      xxs={12}
      key={type}
      sx={gridItemStyles}
    >
      <SectionTitle>{type}s</SectionTitle>
      <DividerRight />
      <TourSwiper
        slidesPerView={1}
        spaceBetween={4}
        breakpoints={breakpoints}
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onSwiper={handleSwiperPosition}
        onSlideChange={handleSwiperPosition}
      >
        {tours.map((tour) => (
          <TourSwiperSlide key={tour.link}>
            <SwiperTourCard
              tour={tour}
              cardType={true}
            />
          </TourSwiperSlide>
        ))}
        <IconButton
          className="swiper-button-prev"
          sx={navBackButtonStyles(isBeginning)}
        >
          <NavigateBefore color="primary" />
        </IconButton>
        <IconButton
          className="swiper-button-next"
          sx={navNextButtonStyles(isEnd)}
        >
          <NavigateNext color="primary" />
        </IconButton>
      </TourSwiper>
    </GridItem>
  );
});
TourSwiperComponent.displayName = 'TourSwiperComponent';

function ToursByType() {
  const [state, actions] = useTour();
  const { sort, filteredData, filterStartLocation } = state;

  const sortedTourData = useSortData(filteredData, sort, filterStartLocation);

  const tourDataByType = useMemo(() => {
    const data = {};
    sortedTourData.forEach((tour) => {
      tour.type.forEach((type) => {
        data[type] = data[type] ?? [];
        data[type].push(tour);
      });
    });

    return Object.entries(data)
      .map(([type, tours]) => ({ type, tours }))
      .sort((a, b) => a.type.localeCompare(b.type));
  }, [sortedTourData]);

  return tourDataByType.map(({ type, tours }, index) => (
    <TourSwiperComponent
      type={type}
      tours={tours}
      key={`${type}-${index}`}
    />
  ));
}

export default React.memo(ToursByType);
