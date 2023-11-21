import React from 'react';
import PageLayout from '@components/PageLayout/';
import Head from 'next/head';
import Fallback from '@components/Fallback';
import { useRouter } from 'next/router';
import { transferData } from '@data/controllers/transfer';
import { isObjEmpty } from '@helperFunctions';
import TransfersByAirportLayout from '@layouts/TransfersByAirportLayout/';

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
  const areaParams = transferData.filter(
    ({ airportLink }) => airportLink === params.airport,
  );

  if (isObjEmpty(areaParams) || !params.airport) {
    return {
      notFound: true,
    };
  }

  const filteredAreaParams = areaParams?.map(({ destinations, ...rest }) => {
    const filteredDestinations = destinations?.map(
      ({
        tripAdvisorDetails,
        tripAdvisorPhotos,
        tripAdvisorReviews,
        ...rest
      }) => {
        const filteredPhotos = tripAdvisorPhotos?.[0] ?? null;

        const filteredDetails = {
          rating: tripAdvisorDetails?.rating ?? null,
          num_reviews: tripAdvisorDetails?.numReviews ?? null,
        };

        const filteredReviews = tripAdvisorReviews?.map(
          ({ rating, title, id }) => ({ rating, title, id }),
        );

        return {
          tripAdvisorPhotos: [filteredPhotos],
          tripAdvisorDetails: filteredDetails,
          tripAdvisorReviews: filteredReviews ?? null,
          ...rest,
        };
      },
    );

    return { ...rest, destinations: filteredDestinations };
  });

  const transferParams = {
    name: areaParams[0]?.airport,
    link: areaParams[0]?.airportLink,
    areas: filteredAreaParams,
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
      <PageLayout
        title={name}
        subheader="Transfers"
      >
        <TransfersByAirportLayout airportData={transferParams} />
      </PageLayout>
    </>
  );
}
