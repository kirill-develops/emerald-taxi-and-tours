import React from 'react';
import PageLayout from '@layouts/PageLayout/';
import ToursLayout from '../../layouts/ToursLayout/';
import Head from 'next/head';
import TourContext from '@context/TourContext';

export default function tours() {
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
