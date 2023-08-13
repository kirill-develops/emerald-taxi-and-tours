import TourCard from '../DetailedTourCard/DetailedCard';
import React, { useMemo } from 'react';
import useDataSorter from '../../hooks/useDataSorter';
import { useTour } from '../../../hooks/useTour';

export default function SortedTours() {
  const [{ sortBy, filteredData, filterStartLocation }] = useTour();

  const sortedTourData = useDataSorter(
    filteredData,
    sortBy,
    filterStartLocation,
  );

  return useMemo(
    () =>
      sortedTourData.map((tour) => (
        <TourCard
          tour={tour}
          key={tour.link}
        />
      )),
    [sortedTourData],
  );
}
