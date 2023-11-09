import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { transferData } from '@data/controllers/transfer';
import Fallback from '@components/Fallback';
import PageLayout from '@components/PageLayout/Layout';
import FormContextProvider from '@context/FormContextProvider';
import DetailedPageLayout from '@components/DetailedPageLayout/DetailedPageLayout';
import generatePaths from '../../../../pageUtils/transfer/generatePaths';
import fetchAndUpdateTripAdvisorData from '../../../../pageUtils/transfer/fetchAndUpdateTripAdvisorData';
import fetchTransferParams from '../../../../pageUtils/transfer/fetchTransferParams';
import fetchLocationIdIfNeeded from '../../../../pageUtils/transfer/fetchLocationIdIfNeeded';

export async function getStaticPaths() {
  const paths = generatePaths(transferData);

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const transferParams = await fetchTransferParams(params);

  let locationId = await fetchLocationIdIfNeeded(transferParams);

  const updatedTransferParams = await fetchAndUpdateTripAdvisorData(
    transferParams,
    locationId,
  );

  return {
    props: {
      params: updatedTransferParams,
    },
    revalidate: 43200,
  };
}

export default React.memo(function DynamicTransfer({ params }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Fallback />;
  }

  const contextParams = { ...params, type: 'transfer' };
  const { name, area: { name: areaName, airport } = {} } = params;

  return (
    <>
      <Head>
        <title>
          {name}, {areaName} {'<>'} {airport} Transfer | EMERALD Taxi & Tours
        </title>
      </Head>
      <PageLayout
        title={name}
        subheader={areaName}
        airport={airport}
      >
        <FormContextProvider value={contextParams}>
          <DetailedPageLayout />
        </FormContextProvider>
      </PageLayout>
    </>
  );
});
