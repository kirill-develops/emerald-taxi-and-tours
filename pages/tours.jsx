import Grid from '@mui/material/Grid';
import React from 'react';
import { gridSpacingProps } from '../material/theme';
import Layout from '../components/Layout';
import TourGrid from '../components/ToursComponents/TourGrid';
import { TourContainer } from '../state/useSort';
import TourOptions from '../components/ToursComponents/TourOptions';
import FilterOptions from '../components/ToursComponents/FilterOptions';

function tours() {
  return (
    <main>
      <TourContainer>
        <Layout>
          <TourOptions />
          <Grid
            container
            spacing={gridSpacingProps}
          >
            <Grid
              item
              sm={4}
              md={3}
              lg={2}
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              <FilterOptions />
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={9}
              lg={10}
            >
              <TourGrid />
            </Grid>
          </Grid>
        </Layout>
      </TourContainer>
    </main>
  );
}

export default tours;
