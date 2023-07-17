import React from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import { GridContainer } from '@elements/CustomGridEl';
import ToursByType from './ToursByType/ToursByType';
import { layoutGridSpacingProp } from '@elements/CustomGridEl';
import AllTours from './AllTours/AllTours';

const gridContainerStyles = { pl: { sm: 0 }, m: 0 };

export default React.memo(function TourGrid() {
  return (
    <MaxWidthContainer
      maxWidth="md"
      disableStack
      sx={gridContainerStyles}
    >
      <GridContainer spacing={layoutGridSpacingProp}>
        <ToursByType />
        <AllTours />
      </GridContainer>
    </MaxWidthContainer>
  );
});
