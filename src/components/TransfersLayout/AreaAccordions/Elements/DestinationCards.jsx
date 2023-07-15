import React from 'react';
import DestinationCard from '../DestinationCard/DestinationCard';

export default React.memo(function DestinationCards({
  areaData: { destinations, ...areaData },
}) {
  const destinationsClone = structuredClone(destinations).reverse();

  return destinationsClone.map((destinaton) => (
    <DestinationCard
      key={destinaton.link}
      destinationData={destinaton}
      areaData={areaData}
    />
  ));
});
