import React from 'react';
import PageLayout from '@components/PageLayout/Layout';
import Head from 'next/head';
import Fallback from '@components/Fallback';
import transferData from '@data/transferData';
import { useRouter } from 'next/router';
import { isObjEmpty } from '../../../helperFunctions';
import TransfersByAirportLayout from '@components/TransfersByAirportLayout/TransfersByAirportLayout';

export async function getStaticPaths() {
  const uniqueAirportLinks = [
    ...new Set(transferData.map((transfer) => transfer.airportLink)),
  ];

  const paths = uniqueAirportLinks.map((airportLink) => ({
    params: {
      airport: airportLink,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const paramDetails = transferData.filter(
    ({ airportLink }) => airportLink === params.airport,
  );

  if (isObjEmpty(paramDetails) || !params.airport) {
    return {
      notFound: true,
    };
  }

  const transferParams = {
    name: paramDetails[0]?.airport,
    link: paramDetails[0]?.airportLink,
    areas: paramDetails,
  };

  return {
    props: {
      transferParams,
    },
    revalidate: 43200,
  };
}

export default function AirportTransfer({ transferParams }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Fallback />;
  }

  const { name } = transferParams;

  return (
    <>
      <Head>
        <title>{name} Transfers | EMERALD Taxi & Tours</title>
      </Head>
      <PageLayout title={`Transfers: ${name}`}>
        <TransfersByAirportLayout airportData={transferParams} />
      </PageLayout>
    </>
  );
}
