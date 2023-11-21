import React from 'react';
import PageLayoutStack from '@elements/PageLayoutStack';
import AreaAccordions from '../../components/TransfersLayout/AreaAccordion/AreaAccordions';
import FeaturedTransfers from '../../components/HomeLayout/FeaturedTransfers/FeaturedTransfers';
import FeaturedToursByStartLocation from '../../components/HomeLayout/FeaturedToursByStartLocation/FeaturedToursByStartLocation';

export default React.memo(function TransfersByAirportLayout({ airportData }) {
  return (
    <PageLayoutStack>
      <AreaAccordions transferData={airportData?.areas} />
      <FeaturedTransfers title="Why not take the scenic route? More Transfer Options Await!" />
      <FeaturedToursByStartLocation />
    </PageLayoutStack>
  );
});
