import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import { gridSpacingProps } from '../../material/theme';
import { tourData } from '../../data/tours';
import { useTour } from '../../state/useSort';
import TourCard from './TourCard';

function useSortData(data, sortBy = '') {
  const clonedData = structuredClone(data);
  switch (sortBy) {
    case '':
      return clonedData;
    case 'alphabetical':
      return clonedData.sort((a, b) => (a.name < b.name ? -1 : 1));
    case 'priceAscending':
      return clonedData; //! figure out sort
    case 'priceDescending':
      return clonedData; //! figure out sort
    case 'region':
      return clonedData.sort((a, b) => (a.area < b.area ? -1 : 1));
  }
}

function TourGrid() {
  const [state, actions] = useTour();
  const { sort } = state;

  const sortedTourData = useSortData(tourData, sort);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={gridSpacingProps}
      >
        {sortedTourData.map((tour) => (
          <TourCard
            tour={tour}
            key={tour.link}
          />
        ))}
      </Grid>
    </Container>
  );
}
export default TourGrid;
