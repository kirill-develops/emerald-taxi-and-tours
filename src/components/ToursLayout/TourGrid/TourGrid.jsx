import React from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import ToursByType from './ToursByType/ToursByType';
import { layoutGridSpacingProp } from '@elements/CustomGridEl';
import AllTours from './AllTours/AllTours';
import FeaturedToursByLocation from '../../HomeLayout/FeaturedToursByStartLocation/FeaturedToursByStartLocation';

const gridContainerStyles = { pl: { sm: 0 }, m: 0 };

export default React.memo(function TourGrid() {
  return (
    <MaxWidthContainer
      maxWidth="lg"
      disableStack
      sx={gridContainerStyles}
    >
      <GridContainer spacing={layoutGridSpacingProp}>
        <ToursByType />
        <GridItem>
          <FeaturedToursByLocation />
        </GridItem>
        <AllTours />
      </GridContainer>
    </MaxWidthContainer>
  );
});
