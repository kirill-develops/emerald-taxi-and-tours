import React, { useMemo } from 'react';
import transferData from '@data/transferData.json';
import AreaAccordions from './AreaAccordions/AreaAccordions';
import SectionLayoutStack from './Element/SectionLayoutStack';

const filterTransferData = (passedAirportLink) =>
  transferData.filter(({ airportLink }) => passedAirportLink === airportLink);

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
