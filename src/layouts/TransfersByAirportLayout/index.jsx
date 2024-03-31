import React from 'react';
import PageLayoutStack from '@elements/PageLayoutStack';
import AreaAccordions from '../../components/AreaAccordion/';
import FeaturedToursByStartLocation from '../../components/FeaturedToursByStartLocation';
import FeaturedTransfers from '../../components/FeaturedTransfers';

export default React.memo(function TransfersByAirportLayout({ airportData }) {
  return (
    <PageLayoutStack>
      <AreaAccordions transferData={airportData?.areas} />
      <FeaturedTransfers title="Why not take the scenic route? More Transfer Options Await!" />
      <FeaturedToursByStartLocation />
    </PageLayoutStack>
  );
});
