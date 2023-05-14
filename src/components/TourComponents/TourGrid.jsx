import Container from '@mui/material/Container';
import React, { useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { useTour } from '@state/useTour';
import TourCard from './TourCard';
import { GridContainer } from '@elements/CustomGridEl';
import useSortData from '@hooks/useSortData';
import { GridItem } from '@elements/CustomGridEl';
import ToursByType from './ToursByType';
import { gridSpacingProps } from '@material/theme';
import TourOptions from './TourOptions';

function AllToursHeader() {
  return useMemo(
    () => (
      <GridItem sx={{ width: '100%' }}>
        <Typography variant="h4">All Tours</Typography>
        <Divider
          variant="inset"
          textAlign="right"
          sx={{ marginBottom: 3 }}
        />
        <TourOptions />
      </GridItem>
    ),
    [],
  );
}

function SortedTours() {
  const [state, actions] = useTour();
  const { sort, filteredData, filterStartLocation } = state;

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

function TourGrid() {
  return (
    <Container
      maxWidth="lg"
      sx={{ pl: { sm: 0 }, pr: { sm: 1 } }}
    >
      <GridContainer spacing={gridSpacingProps}>
        <ToursByType />
        <AllToursHeader />
        <SortedTours />
      </GridContainer>
    </Container>
  );
}
export default React.memo(TourGrid);
