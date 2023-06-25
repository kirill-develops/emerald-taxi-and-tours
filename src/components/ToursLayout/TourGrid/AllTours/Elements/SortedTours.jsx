import TourCard from '../DetailedTourCard/DetailedTourCard';
import React, { useMemo } from 'react';
import { useTour } from '@state/useTour';
import useSortData from '../../hooks/useSortData';

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
