import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React, { useCallback, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

import { GridItem } from '@elements/CustomGridEl';
import DividerRight from '@elements/DividerRight';
import SectionTitle from '@elements/SectionTitle';
import SwiperTourCard from './Elements/SwiperTourCard';
import NavigationButtons from './Elements/NavigationButtons';
import useSwiperBreakpoints from './hooks/useSwiperBreakpoints';

const StyledTourSwiper = styled(Swiper)(({ theme }) =>
  theme.unstable_sx({
    overflow: 'visible',
    '& .swiper-wrapper': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
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

  const key = type.replace(/\s/g, '_');

  const breakpoints = useSwiperBreakpoints();

  const handleSwiperPosition = useCallback((swiper) => {
    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  return (
    <GridItem sx={gridItemStyles}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          pb: 0,
          backgroundColor: (theme) => theme.palette.secondary.container,
          color: (theme) => theme.palette.secondary.containerText,
          position: 'relative',
        }}
      >
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
            prevEl: `.swiper-button-prev__${key}`,
            nextEl: `.swiper-button-next__${key}`,
          }}
          updateOnWindowResize
        >
          {tours.map((tour) => (
            <TourSwiperSlide key={tour.link}>
              <SwiperTourCard tour={tour} />
            </TourSwiperSlide>
          ))}
        </StyledTourSwiper>
        <NavigationButtons
          isStart={isStart}
          isEnd={isEnd}
          type={key}
        />
      </Paper>
    </GridItem>
  );
});
