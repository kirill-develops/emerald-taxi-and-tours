import React from 'react';
import PageLayout from '@components/PageLayout/';
import Head from 'next/head';
import AboutLayout from '@components/AboutLayout/';

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
