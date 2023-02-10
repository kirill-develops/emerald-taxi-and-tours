import Container from '@mui/system/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import Layout from '../components/Layout';
import Sort from '../components/ToursComponents/Sort';
import TourGrid from '../components/ToursComponents/TourGrid';

function Tours() {
  return (
    <main>
      <Layout>
        <Container disableGutters>
          <Typography>TOURS & ATTRACTIONS</Typography>
          <Sort />
        </Container>
        <TourGrid />
      </Layout>
    </main>
  );
}

export default Tours;
