import React from 'react';
import { gridSpacingProps } from '@material/theme';
import TourOptions from './TourOptions/TourOptions';
import FilterOptions from './FilterOptions/FilterOptions';
import TourGrid from './TourGrid/TourGrid';
import { GridContainer, GridItem } from '@elements/CustomGridEl';

const tourOptionsStyles = { display: { xxs: 'none', sm: 'block' } };

const gridItemStyles = { display: { xxs: 'none', sm: 'block' } };

export default React.memo(function TourLayout() {
  return (
    <>
      <TourOptions sx={tourOptionsStyles} />
      <GridContainer spacing={gridSpacingProps}>
        <GridItem
          sm={4}
          md={3}
          lg={2.5}
          sx={gridItemStyles}
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
});
