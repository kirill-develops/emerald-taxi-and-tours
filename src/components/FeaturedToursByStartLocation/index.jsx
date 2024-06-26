import { SwiperSlide } from 'swiper/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { startingPoints } from '@data/controllers/tour';
import LocationCard from './Elements/LocationCard';
import PageSwiper from '@elements/PageSwiper/PageSwiper';
import useSwiperBreakpointSettings from './hooks/useSwiperBreakpointSettings';
import HomeSection from '@elements/HomeSection';

const navKey = 'tours_by_starting_location';

const buttonProps = { sx: { top: '43%' } };

export default React.memo(function FeatureTours({
  title = 'Start Your Jamaican Adventure: Explore Tours By Departure',
  titleHighlight = 'Tours By Departure',
}) {
  const isLessMdBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down('md'),
  );

  const swiperBreakpointSettings = useSwiperBreakpointSettings();

  return (
    <HomeSection
      title={title}
      titleHighlight={titleHighlight}
      disableGutters={isLessMdBreakpoint}
    >
      <PageSwiper
        id={navKey}
        slidesPerView={1.4}
        swiperBreakpointSettings={swiperBreakpointSettings}
        buttonProps={buttonProps}
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
      </PageSwiper>
    </HomeSection>
  );
});
