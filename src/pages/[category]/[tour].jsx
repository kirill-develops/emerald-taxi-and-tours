import Head from 'next/head';
import { useRouter } from 'next/router';
import { promises as fs } from 'fs';
import React from 'react';
import tourData from '@data/tourData.json';
import PageLayout from '@components/PageLayout/Layout';
import Fallback from '@components/Fallback';
import FormContextProvider from '@Form/FormContextProvider';
import getLocationId from '@hooks/getTripAdvisorLocationId';
import getTripAdvisorData from '@hooks/getTripAdvisorData';
import DetailedPageLayout from '@components/DetailedPageLayout/DetailedPageLayout';

export async function getStaticPaths() {
  const paths = tourData.map((tour) => ({
    params: {
      category: 'tours',
      tour: tour.link,
    },
  }));

  return { paths, fallback: true };
}

async function updateTourData(updatedTourParams = {}) {
  const updatedTourData = tourData.map((tour) =>
    tour.link === updatedTourParams.link ? updatedTourParams : tour,
  );

  const tourDataFileContent = JSON.stringify(updatedTourData);

  try {
    await fs.writeFile('src/data/tourData.json', tourDataFileContent);
  } catch (err) {
    console.error('Error updating tour data file:', err);
  }
}

export async function getStaticProps({ params }) {
  const tourParams = tourData.find((tour) => tour.link === params.tour);

  if (!tourParams || params.category !== 'tours') {
    return {
      notFound: true,
    };
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

function DynamicTour({ tourParams }) {
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

export default DynamicTour;
