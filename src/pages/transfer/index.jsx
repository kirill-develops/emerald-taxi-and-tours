import React from 'react';
import PageLayout from '@layouts/PageLayout/';
import Head from 'next/head';
import TransferLayout from '@layouts/TransfersLayout/';

export default function Transfer() {
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
