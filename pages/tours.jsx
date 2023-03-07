import React from 'react';
import Layout from '@components/Layout';
import { TourContainer } from '@state/useTour';
import TourLayout from '@Tour/TourLayout';

function tours() {
  return (
    <TourContainer>
      <Layout title="Tours & Attractions">
        <TourLayout />
      </Layout>
    </TourContainer>
  );
}

export default tours;
