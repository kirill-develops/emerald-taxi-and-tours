import React, { useMemo } from 'react';

import AreaAccordions from './AreaAccordion/AreaAccordions';
import PageLayoutStack from '@elements/PageLayoutStack';
import { filterTransferData } from '@helperFunctions';

export default function TransferLayout() {
  const sangsterTransferData = useMemo(() => filterTransferData('MBJ'), []);
  const normanManleyTransferData = useMemo(() => filterTransferData('KIN'), []);

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
