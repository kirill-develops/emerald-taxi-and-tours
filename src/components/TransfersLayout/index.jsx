import React, { useMemo } from 'react';
import { transferData } from '@data/controllers/transfer';
import PageLayoutStack from '@elements/PageLayoutStack';
import AreaAccordions from './AreaAccordion/AreaAccordions';
import FeaturedTransfersByAirport from '../HomeLayout/FeaturedTransfers/FeaturedTransfers';
import FeaturedTransfersByArea from './FeaturedTransfersByArea/FeaturedTransfersByArea';
import FeaturedToursByStartLocation from '../HomeLayout/FeaturedToursByStartLocation/FeaturedToursByStartLocation';

export default function TransferLayout() {
  const sangsterTransferData = useMemo(
    () => transferData.filterByAirport('MBJ'),
    [],
  );

  const normanManleyTransferData = useMemo(
    () => transferData.filterByAirport('KIN'),
    [],
  );

  return (
    <PageLayoutStack>
      <FeaturedTransfersByAirport title="Ready to Roll? Your Transfer Awaits" />
      <FeaturedTransfersByArea />
      <AreaAccordions
        transferData={sangsterTransferData}
        title="Sangster International, Montego Bay"
      />
      <AreaAccordions
        transferData={normanManleyTransferData}
        title="Norman Manley International, Kingston"
      />
      <FeaturedToursByStartLocation />
    </PageLayoutStack>
  );
}
