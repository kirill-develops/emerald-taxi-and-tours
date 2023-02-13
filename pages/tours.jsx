import React from 'react';
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
          <FilterOptions />
          <TourGrid />
        </Layout>
      </TourContainer>
    </main>
  );
}

export default tours;
