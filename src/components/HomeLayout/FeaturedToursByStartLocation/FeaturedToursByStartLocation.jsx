import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import React, { useCallback, useMemo, useState } from 'react';
import { startingPoints } from '@data/controllers/tour';
import HomeSection from '../Elements/HomeSection';
import LocationCard from './Elements/LocationCard';
import NavigationButtons from '../../ToursLayout/TourGrid/ToursByType/TourSwiper/Elements/NavigationButtons';

const navKey = 'tours_by_starting_location';

const SwiperWrapper = styled(Box)(({ theme }) =>
  theme.unstable_sx({ position: 'relative' }),
);

const StyledTourSwiper = styled(Swiper)(({ theme, isLessMdBreakpoint }) =>
  theme.unstable_sx({
    overflow: 'visible',
    position: 'relative',
    px: isLessMdBreakpoint ? '8px !important' : null,
  }),
);

export default React.memo(function FeatureTours() {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperPosition = useCallback((swiper) => {
    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const muiBreakpoints = useTheme().breakpoints.values;

  const isLessMdBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down('md'),
  );

  const swiperBreakpointSettings = useMemo(
    () => ({
      [muiBreakpoints.xs]: { slidesPerView: 2.4 },
      [muiBreakpoints.sm]: { slidesPerView: 4.3 },
      [muiBreakpoints.md]: { slidesPerView: 6 },
    }),
    [muiBreakpoints],
  );

  return (
    <HomeSection
      title="Browse Island Tours by Starting Locations"
      disableGutters={isLessMdBreakpoint}
      containerStyles={{ position: 'relative' }}
      sx={{ pb: 3 }}
    >
      <SwiperWrapper>
        <StyledTourSwiper
          isLessMdBreakpoint={isLessMdBreakpoint}
          slidesPerView={1.7}
          spaceBetween={10}
          breakpoints={swiperBreakpointSettings}
          modules={[Navigation]}
          onSwiper={handleSwiperPosition}
          onSlideChange={handleSwiperPosition}
          navigation={{
            prevEl: `.swiper-button-prev__${navKey}`,
            nextEl: `.swiper-button-next__${navKey}`,
          }}
          updateOnWindowResize
        >
          {startingPoints.map(({ name, link, total, image }) => (
            <SwiperSlide key={link}>
              <LocationCard
                url={link}
                title={name}
                numberOfTours={total}
                image={image}
              />
            </SwiperSlide>
          ))}
        </StyledTourSwiper>
        {isLessMdBreakpoint ? null : (
          <NavigationButtons
            isStart={isStart}
            isEnd={isEnd}
            type={navKey}
            sx={{ top: '40%' }}
          />
        )}
      </SwiperWrapper>
    </HomeSection>
  );
});
