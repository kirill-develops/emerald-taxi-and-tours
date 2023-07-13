import React from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import { GridContainer } from '@elements/CustomGridEl';
import ToursByType from './ToursByType/ToursByType';
import { gridSpacingProps } from '@material/theme';
import AllTours from './AllTours/AllTours';

const gridContainerStyles = { pl: { sm: 0 } };

function TourGrid() {
  return (
    <MaxWidthContainer
      maxWidth="lg"
      disableStack
      sx={gridContainerStyles}
    >
      <GridContainer spacing={gridSpacingProps}>
        <ToursByType />
        <AllTours />
      </GridContainer>
    </MaxWidthContainer>
  );
}
export default React.memo(TourGrid);
