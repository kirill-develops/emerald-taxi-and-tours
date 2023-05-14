import React from 'react';
import { gridSpacingProps } from '@material/theme';
import TourOptions from './TourOptions';
import FilterOptions from './FilterOptions';
import TourGrid from './TourGrid';
import { GridContainer, GridItem } from '@elements/CustomGridEl';

const tourOptionsStyles = { display: { xs: 'none', sm: 'block' } };

const gridItemStyles = { display: { xs: 'none', sm: 'block' } };

function TourLayout() {
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
}

export default React.memo(TourLayout);
