import Grid from '@mui/material/Grid';
import React from 'react';
import { gridSpacingProps } from '../../material/theme';
import TourOptions from './TourOptions';
import FilterOptions from './FilterOptions';
import TourGrid from './TourGrid';

function TourLayout() {
  return (
    <>
      <TourOptions />
      <Grid
        container
        spacing={gridSpacingProps}
      >
        <Grid
          item
          sm={4}
          md={3}
          lg={2.5}
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          <FilterOptions />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={9}
          lg={9.5}
        >
          <TourGrid />
        </Grid>
      </Grid>
    </>
  );
}

export default TourLayout;
