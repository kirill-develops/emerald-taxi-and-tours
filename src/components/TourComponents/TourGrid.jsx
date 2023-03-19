import Container from '@mui/material/Container';
import React from 'react';
import { gridSpacingProps } from '@material/theme';
import { useTour } from '@state/useTour';
import TourCard from './TourCard';
import { GridContainer } from '@elements/CustomGridEl';
import useSortData from '@hooks/useSortData';

function TourGrid() {
  const [state, actions] = useTour();
  const { sort, filteredData, filterStartLocation } = state;

  const sortedTourData = useSortData(filteredData, sort, filterStartLocation);

  return (
    <Container
      maxWidth="lg"
      sx={{ pl: { sm: 0 }, pr: { sm: 1 } }}
    >
      <GridContainer spacing={gridSpacingProps}>
        {sortedTourData.map((tour) => (
          <TourCard
            tour={tour}
            key={tour.link}
          />
        ))}
      </GridContainer>
    </Container>
  );
}
export default TourGrid;
