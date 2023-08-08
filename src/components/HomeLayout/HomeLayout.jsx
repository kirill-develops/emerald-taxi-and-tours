import React from 'react';
import HeroBanner from './Elements/HeroBanner';
import FeaturedTransfers from './Elements/FeaturedTransfers';
import FeaturedToursByLocation from './Elements/FeaturedToursByLocation';
import ToursByType from '../ToursLayout/TourGrid/ToursByType/ToursByType';
import HomeSection from './Elements/HomeSection';
import { GridContainer, layoutGridSpacingProp } from '@elements/CustomGridEl';

export default function HomeLayout() {
  return (
    <>
      <HeroBanner />
      <FeaturedTransfers />
      <FeaturedToursByLocation />
      <HomeSection title="Browse Private Island Tours By Category">
        <GridContainer spacing={layoutGridSpacingProp}>
          <ToursByType />
        </GridContainer>
      </HomeSection>
    </>
  );
}
