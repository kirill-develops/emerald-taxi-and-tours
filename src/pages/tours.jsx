import React from 'react';
import PageLayout from '@components/PageLayout/Layout';
import ToursLayout from '@Tour/ToursLayout';
import Head from 'next/head';
import TourContext from '@context/TourContext';

function tours() {
  return (
    <>
      <Head>
        <title>Attractions & Tours | EMERALD Taxi & Tours</title>
      </Head>
      <TourContext>
        <PageLayout title="Tours & Attractions">
          <ToursLayout />
        </PageLayout>
      </TourContext>
    </>
  );
}

export default tours;
