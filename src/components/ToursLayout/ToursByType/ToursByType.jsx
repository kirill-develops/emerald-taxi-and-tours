import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import useTourByTypeDataFetcher from './hooks/useTourByTypeDataFetcher';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import TourSwiper from './TourSwiper/TourSwiper';

export default React.memo(function ToursByType() {
  const isLessMdBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down('md'),
  );

  return (
    <MaxWidthContainer
      rowGap={{ xxs: 2, md: 8 }}
      disableGutters={isLessMdBreakpoint}
    >
      <TourSwipers />
    </MaxWidthContainer>
  );
});

const TourSwipers = React.memo(function TourSwipers() {
  const tourDataByType = useTourByTypeDataFetcher();

  return tourDataByType
    .sort((a, b) => b?.tours?.length - a?.tours?.length)
    .map(({ type, tours }, index) => (
      <TourSwiper
        type={type}
        tours={tours}
        key={`${type}-${index}`}
      />
    ));
});
