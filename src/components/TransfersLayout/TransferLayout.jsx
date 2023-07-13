import React, { useMemo } from 'react';

import AreaAccordions from './AreaAccordions/AreaAccordions';
import SectionLayoutStack from './Element/SectionLayoutStack';
import { filterTransferData } from '@helperFunctions';

export default function TransferLayout() {
  const sangsterTransferData = useMemo(() => filterTransferData('MBJ'), []);
  const normanManleyTransferData = useMemo(() => filterTransferData('KIN'), []);

  return (
    <SectionLayoutStack>
      <AreaAccordions
        transferData={sangsterTransferData}
        title="Sangster International, Montego Bay"
      />
      <AreaAccordions
        transferData={normanManleyTransferData}
        title="Norman Manley International, Kingston"
      />
    </SectionLayoutStack>
  );
}
