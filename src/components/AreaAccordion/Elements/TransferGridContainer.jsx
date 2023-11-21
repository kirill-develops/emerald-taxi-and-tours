import React from 'react';
import { layoutGridSpacingProp } from '@elements/CustomGridEl';
import { GridContainer } from '@elements/CustomGridEl';

const gridContainerStyles = { alignItems: 'stretch' };

export default function TransferGridContainer({ children }) {
  return (
    <GridContainer
      spacing={layoutGridSpacingProp}
      sx={gridContainerStyles}
    >
      {children}
    </GridContainer>
  );
}
