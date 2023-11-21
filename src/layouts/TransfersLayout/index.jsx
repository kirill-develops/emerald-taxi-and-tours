import React, { useMemo } from 'react';
import { transferData } from '@data/controllers/transfer';
import PageLayoutStack from '@elements/PageLayoutStack';
import AreaAccordions from '../../components/AreaAccordion/';
import FeaturedTransfersByArea from '../../components/FeaturedTransfersByArea';
import FeaturedToursByStartLocation from '../../components/FeaturedToursByStartLocation';
import FeaturedTransfers from '../../components/FeaturedTransfers';

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
      <FeaturedTransfers title="Ready to Roll? Your Transfer Awaits" />
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
