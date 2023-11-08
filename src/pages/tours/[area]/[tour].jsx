import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { tourData } from '@data/controllers/tour';
import { updateTourData } from '@data/controllers/updateTourData';
import PageLayout from '@components/PageLayout/Layout';
import Fallback from '@components/Fallback';
import FormContextProvider from '@context/FormContextProvider';
import getLocationId from '@hooks/getTripAdvisorLocationId';
import getTripAdvisorData from '@hooks/getTripAdvisorData';
import DetailedPageLayout from '@components/DetailedPageLayout/DetailedPageLayout';

export function getToursUrl(areaLink, link) {
  return `/tours/${areaLink}/${link}`;
}

export async function getStaticPaths() {
  const createTourPath = (tour) => ({
    params: {
      area: tour.area_link,
      tour: tour.link,
    },
  });

  const paths = tourData.map(createTourPath);

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { tour: tourParam, area: areaParam } = params;

  if (!areaParam || !tourParam) {
    return {
      notFound: true,
    };
  }

  const isCurrentTour = (tour) =>
    tourParam === tour.link && areaParam === tour.area_link;

  const tourParams = tourData.find(isCurrentTour);

  if (!tourParams) {
    return { notFound: true };
  }

  if (!tourParams.location_id) {
    const locationId = await getLocationId(tourParams);

    if (locationId) {
      const updatedTourParams = { ...tourParams, locationId };
      await updateTourData(updatedTourParams);
    }
  }

  const timeWindow = 48 * 60 * 60 * 1000; // 48 Hours //! change to 12 hours when live
  const isOldData =
    Date.now() - new Date(tourParams.dateUpdated).getTime() > timeWindow;

  if (
    tourParams.location_id &&
    (!tourParams?.tripAdvisorDetails ||
      !tourParams?.tripAdvisorPhotos ||
      !tourParams?.tripAdvisorReviews ||
      isOldData)
  ) {
    const { params: updatedTourParams, isDataUpdated } =
      await getTripAdvisorData(tourParams, isDataUpdated);

    if (isDataUpdated) {
      await updateTourData(updatedTourParams);
    }
  }

  return {
    props: {
      tourParams,
    },
    revalidate: 43200,
  };
}

export default function DynamicTour({ tourParams }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Fallback />;
  }

  const { area, name } = tourParams;
  const context = { ...tourParams, type: 'tour' };

  return (
    <>
      <Head>
        <title>
          Tour: {name}, {area}| EMERALD Taxi & Tours
        </title>
      </Head>
      <PageLayout
        title={name}
        subheader={area}
      >
        <FormContextProvider value={context}>
          <DetailedPageLayout />
        </FormContextProvider>
      </PageLayout>
    </>
  );
}
