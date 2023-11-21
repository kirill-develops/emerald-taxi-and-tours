import React from 'react';
import PageLayout from '@layouts/PageLayout/';
import Head from 'next/head';
import AboutLayout from '@layouts/AboutLayout/';

export default function About() {
  return (
    <>
      <Head>
        <title>About US | EMERALD Taxi & Tours</title>
      </Head>
      <PageLayout title="About Us">
        <AboutLayout />
      </PageLayout>
    </>
  );
}
