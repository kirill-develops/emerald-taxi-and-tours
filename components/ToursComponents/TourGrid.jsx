import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import { gridSpacingProps } from '@material/theme';
import { useTour } from '@state/useTour';
import TourCard from './TourCard';

function useSortData(data, sortBy = '') {
  const clonedData = structuredClone(data);
  switch (sortBy) {
    case '':
      return clonedData;
    case 'alphabetical':
      return clonedData.sort((a, b) => a.name.localeCompare(b.name));
    case 'priceAscending':
      return clonedData; //! figure out sort
    case 'priceDescending':
      return clonedData; //! figure out sort
    case 'region':
      return clonedData.sort((a, b) => a.area.localeCompare(b.area));
  }
}

function TourGrid() {
  const [state, actions] = useTour();
  const { sort, filteredData } = state;

  const sortedTourData = useSortData(filteredData, sort);

  return (
    <Container
      maxWidth="lg"
      sx={{ pl: { sm: 0 }, pr: { sm: 1 } }}
    >
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
