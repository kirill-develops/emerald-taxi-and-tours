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
import SectionTitle from '@elements/SectionTitle';

const tourHeaderStyles = { width: '100%' };

const headerDividerStyles = { marginBottom: 3 };

const gridContainerStyles = { pl: { sm: 0 }, pr: { sm: 1 } };

function AllToursHeader() {
  return useMemo(
    () => (
      <GridItem sx={tourHeaderStyles}>
        <SectionTitle>All Tours</SectionTitle>
        <TourOptions />
      </GridItem>
    ),
    [],
  );
}

function SortedTours() {
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

function TourGrid() {
  return (
    <Container
      maxWidth="lg"
      sx={gridContainerStyles}
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
