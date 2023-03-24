import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { tourData } from '@data/tours';
import Layout from '@components/Layout';
import Fallback from '@components/Fallback';
import BookingLayout from '@components/BookingLayout';
import FormContextProvider from '@components/FormComponents/FormContextProvider';

export async function getStaticPaths() {
  const paths = tourData.map((tour) => ({
    params: {
      category: 'tours',
      tour: tour.link,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const tourParams = tourData.find((tour) => tour.link === params.tour);

  if (!tourParams || params.category !== 'tours') {
    return {
      notFound: true,
    };
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

  const { area, description, link, name, price, type } = tourParams;

  return (
    <>
      <Head>
        <title>
          Tour: {name}, {area}| EMERALD Taxi & Tours
        </title>
      </Head>
      <Layout
        title={name}
        subheader={area}
      >
        <FormContextProvider value={{ tourParams, type: 'tour' }}>
          <BookingLayout />
        </FormContextProvider>
      </Layout>
    </>
  );
}

export default DynamicTour;
