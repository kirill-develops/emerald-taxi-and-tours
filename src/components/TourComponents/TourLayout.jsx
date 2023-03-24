import React from 'react';
import { gridSpacingProps } from '@material/theme';
import TourOptions from './TourOptions';
import FilterOptions from './FilterOptions';
import TourGrid from './TourGrid';
import { GridContainer, GridItem } from '@elements/CustomGridEl';

function TourLayout() {
  return (
    <>
      <TourOptions />
      <GridContainer spacing={gridSpacingProps}>
        <GridItem
          sm={4}
          md={3}
          lg={2.5}
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          <FilterOptions />
        </GridItem>
        <GridItem
          xs={12}
          sm={8}
          md={9}
          lg={9.5}
        >
          <TourGrid />
        </GridItem>
      </GridContainer>
    </>
  );
}

export default TourLayout;
