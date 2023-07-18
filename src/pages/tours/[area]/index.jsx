import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import tourData from '@data/tourData.json';
import PageLayout from '@components/PageLayout/Layout';
import TourAreaContext from '@context/TourAreaContext';
import Fallback from '@components/Fallback';
import ToursByLocationLayout from '@components/ToursByLocationLayout/ToursByLocationLayout';

export async function getStaticPaths() {
  const paths = tourData.map((tour) => ({
    params: {
      area: tour.areaLink,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const paramDetails = tourData
    .find((tour) => tour.price.find(({ link }) => link === params.area))
    ?.price.find(({ link }) => link === params.area);

  if (!paramDetails || !params.area) {
    return {
      notFound: true,
    };
  }

  const { price, ...filteredParams } = paramDetails;

  const filteredLocations = tourData
    .filter(
      (tour) => tour.price.find(({ link }) => link === params.area) && tour,
    )
    .map(({ name, area, link, areaLink, type, price, tripAdvisorPhotos }) => ({
      name,
      area,
      link,
      areaLink,
      type,
      price,
      photoObj: tripAdvisorPhotos[0],
    }));

  const tourParams = {
    ...filteredParams,
    locations: filteredLocations,
  };

  return {
    props: {
      tourParams,
    },
    revalidate: 43200,
  };
}

export default function AreaPage({ tourParams }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Fallback />;
  }

  const { name, parish } = tourParams;
  console.log(tourParams);

  return (
    <>
      <Head>
        <title>
          {name}, {parish}: Tours | EMERALD Taxi & Tours
        </title>
      </Head>

      <PageLayout title={`${name}, ${parish} - Tours `}>
        <TourAreaContext.Provider value={tourParams}>
          <ToursByLocationLayout />
        </TourAreaContext.Provider>
      </PageLayout>
    </>
  );
}
