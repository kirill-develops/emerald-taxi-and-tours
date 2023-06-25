import React, { useMemo } from 'react';
import PageLayout from '@components/PageLayout/Layout';
import { transferData } from '@data/transfers';
import AreaAccordionArr from '@Transfer/AreaAccordionArr';
import Head from 'next/head';

function Transfer() {
  const { sangsterTransferData, normanManleyTransferData } = useMemo(() => {
    return {
      sangsterTransferData: transferData.filter(
        ({ airportLink }) => airportLink === 'MBJ',
      ),
      normanManleyTransferData: transferData.filter(
        ({ airportLink }) => airportLink === 'KIN',
      ),
    };
  }, []);

  return (
    <>
      <Head>
        <title>Airport Transfers | EMERALD Taxi & Tours</title>
      </Head>
      <PageLayout title="Airport Transfers">
        <AreaAccordionArr
          transferData={sangsterTransferData}
          title="Sangster International, Montego Bay"
        />
        <AreaAccordionArr
          transferData={normanManleyTransferData}
          title="Norman Manley International, Kingston"
        />
      </PageLayout>
    </>
  );
}

export default Transfer;
