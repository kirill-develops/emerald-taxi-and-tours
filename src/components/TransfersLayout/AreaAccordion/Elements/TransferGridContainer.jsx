import React from 'react';
import { gridSpacingProps } from '@material/theme';
import { GridContainer } from '@elements/CustomGridEl';

const gridContainerStyles = { alignItems: 'stretch' };

export default function TransferGridContainer({ children }) {
  return (
    <GridContainer
      spacing={gridSpacingProps}
      sx={gridContainerStyles}
    >
      {children}
    </GridContainer>
  );
}
