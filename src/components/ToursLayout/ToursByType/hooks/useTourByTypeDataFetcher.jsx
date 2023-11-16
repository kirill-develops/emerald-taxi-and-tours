import { useMemo } from 'react';
import { useTour } from '../../hooks/useTour';

export default function useTourByTypeDataFetcher() {
  const [state] = useTour();
  const { tourData } = state;

  return useMemo(() => {
    const data = tourData.reduce((data, tour) => {
      tour.type.forEach((type) => {
        data[type] = data[type] || [];
        data[type].push(tour);
      });
      return data;
    }, {});

    return Object.entries(data)
      .map(([type, tours]) => ({ type, tours }))
      .sort((a, b) => a.type.localeCompare(b.type));
  }, [tourData]);
}
