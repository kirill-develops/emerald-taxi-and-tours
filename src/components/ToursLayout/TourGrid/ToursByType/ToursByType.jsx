import React from 'react';
import useTourByTypeDataFetcher from './hooks/useTourByTypeDataFetcher';
import TourSwiper from './TourSwiper/TourSwiper';

export default React.memo(function ToursByType() {
  const tourDataByType = useTourByTypeDataFetcher();

  return tourDataByType.map(({ type, tours }, index) => (
    <TourSwiper
      type={type}
      tours={tours}
      key={`${type}-${index}`}
    />
  ));
});
