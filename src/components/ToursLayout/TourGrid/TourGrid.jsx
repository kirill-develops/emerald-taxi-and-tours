import Container from '@mui/material/Container';
import React from 'react';
import { GridContainer } from '@elements/CustomGridEl';
import ToursByType from './ToursByType/ToursByType';
import { gridSpacingProps } from '@material/theme';
import AllTours from './AllTours/AllTours';

const gridContainerStyles = { pl: { sm: 0 }, pr: { sm: 1 } };

function TourGrid() {
  return (
    <Container
      maxWidth="lg"
      sx={gridContainerStyles}
    >
      <GridContainer spacing={gridSpacingProps}>
        <ToursByType />
        <AllTours />
      </GridContainer>
    </Container>
  );
}
export default React.memo(TourGrid);
