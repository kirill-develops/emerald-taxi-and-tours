import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { startingPoints } from '@data/controllers/tour';
import PageLayout from '@components/PageLayout/';
import TourAreaContext from '@context/TourAreaContext';
import Fallback from '@components/Fallback';
import ToursByLocationLayout from '@components/ToursByLocationLayout/';
import { isObjEmpty } from '../../../helperFunctions';
import { filterToursByStartingPoint } from '../../../data/controllers/tour';

export async function getStaticPaths() {
  const paths = startingPoints.map((startingPoint) => ({
    params: {
      area: startingPoint.link,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const paramDetails = startingPoints.find(({ link }) => link === params.area);

  if (isObjEmpty(paramDetails) || !params.area) {
    return {
      notFound: true,
    };
  }

  const { price, image, ...filteredParams } = paramDetails;

  const filteredLocations = filterToursByStartingPoint(params.area).map(
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
      awards: tripAdvisorDetails?.awards || [],
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

  const layoutTitle = `${name}${parish && `, ${parish}`}`;

  return (
    <>
      <Head>
        <title>
          {name}
          {parish && `, ${parish}`}: Tours | EMERALD Taxi & Tours
        </title>
      </Head>

      <PageLayout
        title={layoutTitle}
        subheader="Tours"
      >
        <TourAreaContext.Provider value={tourParams}>
          <ToursByLocationLayout />
        </TourAreaContext.Provider>
      </PageLayout>
    </>
  );
}
