import React from 'react';
import PageLayoutStack from '@elements/PageLayoutStack';
import AreaAccordions from '../TransfersLayout/AreaAccordion/AreaAccordions';

export default React.memo(function TransfersByAirportLayout({ airportData }) {
  return (
    <PageLayoutStack>
      <AreaAccordions transferData={airportData?.areas} />
    </PageLayoutStack>
  );
});
