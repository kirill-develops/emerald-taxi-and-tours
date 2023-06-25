import React, { useMemo } from 'react';
import { GridItem } from '@elements/CustomGridEl';
import TourOptions from '../../../TourOptions/TourOptions';
import DividerRight from '@elements/DividerRight';
import SectionTitle from '@elements/SectionTitle';

const tourHeaderStyles = { width: '100%' };

const headerDividerStyles = { mb: 3 };

export default function AllToursHeader() {
  return useMemo(
    () => (
      <GridItem sx={tourHeaderStyles}>
        <SectionTitle>All Tours</SectionTitle>
        <DividerRight sx={headerDividerStyles} />
        <TourOptions />
      </GridItem>
    ),
    [],
  );
}
