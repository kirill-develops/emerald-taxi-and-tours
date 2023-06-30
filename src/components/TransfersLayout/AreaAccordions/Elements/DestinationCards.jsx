import React from 'react';
import DestinationCard from './DestinationCard';

export default React.memo(function DestinationCards({
  areaData: { destinations, ...areaData },
}) {
  return destinations.map((destinaton) => (
    <DestinationCard
      key={destinaton.link}
      destinationData={destinaton}
      areaData={areaData}
    />
  ));
});
