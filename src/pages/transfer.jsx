import React from 'react';
import Layout from '@components/Layout';
import {
  normanManleyTransferData,
  sangsterTransferData,
} from '@data/transfers';
import AreaAccordionArr from '@Transfer/AreaAccordionArr';
import Head from 'next/head';

function Transfer() {
  return (
    <>
      <Head>
        <title>Airport Transfers | EMERALD Taxi & Tours</title>
      </Head>
      <Layout title="Airport Transfers">
        <AreaAccordionArr
          transferData={sangsterTransferData}
          title="Sangster International, Montego Bay"
        />
        <AreaAccordionArr
          transferData={normanManleyTransferData}
          title="Norman Manley International, Kingston"
        />
      </Layout>
    </>
  );
}

export default Transfer;
