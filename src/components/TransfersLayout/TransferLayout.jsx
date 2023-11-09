import React, { useMemo } from 'react';

import AreaAccordions from './AreaAccordion/AreaAccordions';
import PageLayoutStack from '@elements/PageLayoutStack';
import { transferData } from '@data/controllers/transfer';

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
      <AreaAccordions
        transferData={sangsterTransferData}
        title="Sangster International, Montego Bay"
      />
      <AreaAccordions
        transferData={normanManleyTransferData}
        title="Norman Manley International, Kingston"
      />
    </PageLayoutStack>
  );
}
