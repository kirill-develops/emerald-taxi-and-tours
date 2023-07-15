import React, { useMemo } from 'react';
import { GridItem } from '@elements/CustomGridEl';
import TourOptions from '../TourOptions/TourOptions';
import DividerRight from '@elements/DividerRight';
import SectionTitle from '@elements/SectionTitle';

const headerDividerStyles = { mb: 3 };

export default React.memo(function AllToursHeader() {
  return useMemo(
    () => (
      <GridItem>
        <SectionTitle>All Tours</SectionTitle>
        <DividerRight sx={headerDividerStyles} />
        <TourOptions />
      </GridItem>
    ),
    [],
  );
});
