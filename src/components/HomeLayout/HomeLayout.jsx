import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner';
import FeaturedTransfers from './FeaturedTransfers/FeaturedTransfers';
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
      <HomeSection title="Explore Every Niché Jamaica Has to Offer">
        <GridContainer spacing={layoutGridSpacingProp}>
          <ToursByType />
        </GridContainer>
      </HomeSection>
    </>
  );
}
