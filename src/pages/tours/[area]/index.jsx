import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import tourData from '@data/tourData.json';
import PageLayout from '@components/PageLayout/Layout';
import TourAreaContext from '@context/TourAreaContext';
import Fallback from '@components/Fallback';
import ToursByLocationLayout from '@components/ToursByLocationLayout/ToursByLocationLayout';
import { isObjEmpty } from '../../../helperFunctions';

export async function getStaticPaths() {
  const paths = tourData.map((tour) => ({
    params: {
      area: tour.area_link,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const paramDetails = tourData
    .flatMap((tour) => tour.starting_points)
    .find(({ link }) => link === params.area);

  if (isObjEmpty(paramDetails) || !params.area) {
    return {
      notFound: true,
    };
  }

  const { price, ...filteredParams } = paramDetails;

  const filteredLocations = tourData
    .filter((tour) =>
      tour.starting_points.some(({ link }) => link === params.area),
    )
    .map(
      ({
        name,
        area,
        link,
        area_link: areaLink,
        type,
        starting_points: startingPoints,
        tripAdvisorDetails,
        tripAdvisorPhotos,
        tripAdvisorReviews,
      }) => ({
        name,
        area,
        link,
        areaLink,
        type,
        startingPoints,
        photoObj: tripAdvisorPhotos[0],
        priceLevel: tripAdvisorDetails?.price_level || null,
        cuisine: tripAdvisorDetails?.cuisine || null,
        groups: tripAdvisorDetails?.groups || null,
        numReviews: tripAdvisorDetails?.num_reviews || null,
        rating: tripAdvisorDetails?.rating || null,
        reviews:
          tripAdvisorReviews?.map((review) => ({
            title: review?.title,
            id: review?.id,
          })) || [],
        subcategory: tripAdvisorDetails?.subcategory || null,
      }),
    );

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

  return (
    <>
      <Head>
        <title>
          {name}, {parish}: Tours | EMERALD Taxi & Tours
        </title>
      </Head>

      <PageLayout
        title={`${name}, ${parish}`}
        subheader="Tours"
      >
        <TourAreaContext.Provider value={tourParams}>
          <ToursByLocationLayout />
        </TourAreaContext.Provider>
      </PageLayout>
    </>
  );
}
