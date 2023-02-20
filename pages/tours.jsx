import React from 'react';
import Layout from '@components/Layout';
import { TourContainer } from '@state/useTour';
import TourLayout from '@components/ToursComponents/TourLayout';

function tours() {
  return (
    <main>
      <TourContainer>
        <Layout title="Tours & Attractions">
          <TourLayout />
        </Layout>
      </TourContainer>
    </main>
  );
}

export default tours;
