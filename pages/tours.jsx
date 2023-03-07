import React from 'react';
import Layout from '@components/Layout';
import { TourContainer } from '@state/useTour';
import TourLayout from '@Tour/TourLayout';
import Head from 'next/head';

function tours() {
  return (
    <>
      <Head>
        <title>Attractions & Tours | EMERALD Taxi & Tours</title>
      </Head>
      <TourContainer>
        <Layout title="Tours & Attractions">
          <TourLayout />
        </Layout>
      </TourContainer>
    </>
  );
}

export default tours;
