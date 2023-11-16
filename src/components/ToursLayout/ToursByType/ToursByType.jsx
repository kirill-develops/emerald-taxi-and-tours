import React from 'react';
import useTourByTypeDataFetcher from './hooks/useTourByTypeDataFetcher';
import TourSwiper from './TourSwiper/TourSwiper';

export default React.memo(function ToursByType() {
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
