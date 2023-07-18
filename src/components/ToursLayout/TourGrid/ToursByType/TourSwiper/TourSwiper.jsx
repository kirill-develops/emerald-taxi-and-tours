import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { styled, useTheme } from '@mui/material/styles';
import React, { useCallback, useMemo, useState } from 'react';

import 'swiper/swiper.min.css';

import { GridItem } from '@elements/CustomGridEl';
import DividerRight from '@elements/DividerRight';
import SectionTitle from '@elements/SectionTitle';
import SwiperTourCard from './Elements/SwiperTourCard';
import { layoutGridSpacingProp } from '@elements/CustomGridEl';
import NavigationButtons from './Elements/NavigationButtons';

const StyledTourSwiper = styled(Swiper)(({ theme }) =>
  theme.unstable_sx({
    marginTop: { ...layoutGridSpacingProp },
  }),
);

const TourSwiperSlide = styled(SwiperSlide)({});

const gridItemStyles = {
  width: '100%',
  flexDirection: 'column',
};

export default React.memo(function TourSwiper({ tours, type }) {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const muiBreakpoints = useTheme().breakpoints.values;

  const breakpoints = useMemo(
    () => ({
      [muiBreakpoints.xs]: { slidesPerView: 1.2 },
      [muiBreakpoints.sm]: { slidesPerView: 1.1 },
      [muiBreakpoints.md]: { slidesPerView: 1.3 },
    }),
    [muiBreakpoints],
  );

  const handleSwiperPosition = useCallback((swiper) => {
    setIsStart(swiper.isBeginning ? true : false);
    setIsEnd(swiper.isEnd ? true : false);
  }, []);

  return (
    <GridItem sx={gridItemStyles}>
      <SectionTitle>{type}s</SectionTitle>
      <DividerRight />
      <StyledTourSwiper
        slidesPerView={1}
        spaceBetween={8}
        breakpoints={breakpoints}
        modules={[Navigation]}
        onSwiper={handleSwiperPosition}
        onSlideChange={handleSwiperPosition}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        {tours.map((tour) => (
          <TourSwiperSlide key={tour.link}>
            <SwiperTourCard tour={tour} />
          </TourSwiperSlide>
        ))}
        <NavigationButtons
          isStart={isStart}
          isEnd={isEnd}
        />
      </StyledTourSwiper>
    </GridItem>
  );
});
