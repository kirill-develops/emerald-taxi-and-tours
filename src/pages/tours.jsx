import React from 'react';
import PageLayout from '@components/PageLayout/Layout';
import { TourContainer } from '@state/useTour';
import ToursLayout from '@Tour/ToursLayout';
import Head from 'next/head';

function tours() {
  return (
    <>
      <Head>
        <title>Attractions & Tours | EMERALD Taxi & Tours</title>
      </Head>
      <TourContainer>
        <PageLayout title="Tours & Attractions">
          <ToursLayout />
        </PageLayout>
      </TourContainer>
    </>
  );
}

export default tours;
