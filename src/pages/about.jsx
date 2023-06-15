import React from 'react';
import Layout from '@components/Layout';
import Head from 'next/head';
import AboutLayout from '@components/AboutLayout/';

export default function About() {
  return (
    <>
      <Head>
        <title>About US | EMERALD Taxi & Tours</title>
      </Head>
      <Layout title="About Us">
        <AboutLayout />
      </Layout>
    </>
  );
}
