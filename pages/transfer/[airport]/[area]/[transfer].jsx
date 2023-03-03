import React from 'react';
import Layout from '@components/Layout';
import { useRouter } from 'next/router';
import {
  sangsterTransferData,
  normanManleyTransferData,
} from '@data/transfers';
import Fallback from '@components/Fallback';
import BookingLayout from '@components/BookingLayout';

const transferData = [...sangsterTransferData, ...normanManleyTransferData];

export async function getStaticPaths() {
  function generatePaths(transferData) {
    const paths = [];

    transferData.forEach((transferArea) => {
      const areaLink = transferArea.link;
      const airport = transferArea.airportLink;

      transferArea.destinations.forEach((destination) => {
        const transferLink = destination.link;

        const path = {
          params: {
            airport: airport,
            area: areaLink,
            transfer: transferLink,
          },
        };

        paths.push(path);
      });
    });

    return paths;
  }

  const paths = generatePaths(transferData);

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const transferAirport = transferData.filter(
    (transferArea) => transferArea.airportLink === params.airport,
  );

  if (!transferAirport) {
    return {
      notFound: true,
    };
  }

  const transferArea = transferAirport.find(
    (transferArea) => transferArea.link === params.area,
  );

  if (!transferArea) {
    return {
      notFound: true,
    };
  }

  const transferParams = transferArea?.destinations.find(
    (destination) => destination.link === params.transfer,
  );

  if (!transferParams) {
    return {
      notFound: true,
    };
  }

  const { destinations, ...areaParams } = transferArea;

  return {
    props: {
      transferParams,
      areaParams,
    },
    revalidate: 43200,
  };
}

function DynamicTransfer({ transferParams, areaParams }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Fallback />;
  }

  const { link, name, price } = transferParams;

  return (
    <Layout
      title={name}
      subheader={areaParams.name}
      airport={areaParams.airport}
    >
      <BookingLayout />
    </Layout>
  );
}

export default DynamicTransfer;