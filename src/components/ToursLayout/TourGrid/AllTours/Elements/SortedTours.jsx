import TourCard from '../DetailedTourCard/DetailedCard';
import React, { useMemo } from 'react';
import useSortData from '../../hooks/useSortData';
import { useTour } from '../../../hooks/useTour';

export default function SortedTours() {
  const [{ sort, filteredData, filterStartLocation }] = useTour();

  const sortedTourData = useSortData(filteredData, sort, filterStartLocation);

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
