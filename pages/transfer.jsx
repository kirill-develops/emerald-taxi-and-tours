import React from 'react';
import Layout from '@components/Layout';
import {
  normanManleyTransferData,
  sangsterTransferData,
} from '@data/transfers';
import AreaAccordionArr from '@Transfer/AreaAccordionArr';

function Transfer() {
  return (
    <>
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
