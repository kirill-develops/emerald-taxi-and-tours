import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { tourData } from '@data/controllers/tour';
import PageLayout from '@layouts/PageLayout/';
import Fallback from '@components/Fallback';
import FormContextProvider from '@context/FormContextProvider';
import DetailedPageLayout from '@layouts/DetailedPageLayout/';
import { generateAllTourPaths } from '../../../pageUtils/generatePaths';
import fetchTourParams from '../../../pageUtils/tour/fetchTourParams';
import fetchLocationIdIfNeeded from '../../../pageUtils/tour/fetchLocationIdIfNeeded';
import fetchAndUpdateTripAdvisorData from '../../../pageUtils/tour/fetchAndUpdateTripAdvisorData';

export function getToursUrl(areaLink, link) {
  return `/tours/${areaLink}/${link}`;
}

export async function getStaticPaths() {
  const paths = generateAllTourPaths(tourData);

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const tourParams = await fetchTourParams(params);

  if (tourParams.notFound) {
    return { notFound: true };
  }

  let locationId = await fetchLocationIdIfNeeded(tourParams);

  const updatedTourParams = await fetchAndUpdateTripAdvisorData(
    tourParams,
    locationId,
  );

  return {
    props: {
      tourParams: updatedTourParams,
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
          {name} Tour in {area}| EMERALD Taxi & Tours
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
