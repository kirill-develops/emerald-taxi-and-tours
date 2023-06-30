import React from 'react';
import PageLayout from '@components/PageLayout/Layout';
import Head from 'next/head';
import TransferLayout from '../components/TransfersLayout/TransferLayout';

function Transfer() {
  return (
    <>
      <Head>
        <title>Airport Transfers | EMERALD Taxi & Tours</title>
      </Head>
      <PageLayout title="Airport Transfers">
        <TransferLayout />
      </PageLayout>
    </>
  );
}

export default Transfer;
