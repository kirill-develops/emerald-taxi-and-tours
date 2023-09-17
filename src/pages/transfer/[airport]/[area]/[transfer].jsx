import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import transferData from '@data/transferData.json';
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
  const { transferParams, areaData } = await fetchTransferParams(params);

  let locationId = await fetchLocationIdIfNeeded(transferParams, areaData);

  const updatedTransferParams = await fetchAndUpdateTripAdvisorData(
    transferParams,
    locationId,
    areaData,
  );

  const paramsData = {
    ...updatedTransferParams,
    area: areaData,
  };

  return {
    props: {
      params: paramsData,
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

  return (
    <>
      <Head>
        <title>
          Transfers: {params.name}, {params.area.name} & {params.area.airport}|
          EMERALD Taxi & Tours
        </title>
      </Head>
      <PageLayout
        title={params.name}
        subheader={params.area.name}
        airport={params.area.airport}
      >
        <FormContextProvider value={contextParams}>
          <DetailedPageLayout />
        </FormContextProvider>
      </PageLayout>
    </>
  );
});
