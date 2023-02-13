import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import { gridSpacingProps } from '../../material/theme';
import { tourData } from '../../data/tours';
import { useTour } from '../../state/useSort';
import TourCard from './TourCard';

function useFilterData(data, startLocationFilter, typeFilter, areaFilter) {
  const filteredData = data.filter((item) => {
    let include = false;
    if (areaFilter[item.area]) {
      include = true;
    } else if (item.type.some((t) => typeFilter[t])) {
      include = true;
    } else if (item.price.some((p) => startLocationFilter[p.link])) {
      include = true;
    }
    return include;
  });

  return filteredData.length > 0 ? filteredData : data;
}

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
  const { sort, filterStartLocation, filterType, filterArea } = state;

  const filteredTourData = useFilterData(
    tourData,
    filterStartLocation,
    filterType,
    filterArea,
  );

  const sortedTourData = useSortData(filteredTourData, sort);

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
