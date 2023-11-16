import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner';
import FeaturedTransfers from './FeaturedTransfers/FeaturedTransfers';
import FeaturedToursByLocation from './FeaturedToursByStartLocation/FeaturedToursByStartLocation';
import ToursByType from '../ToursLayout/ToursByType/ToursByType';
import HomeSection from './Elements/HomeSection';

export default function HomeLayout() {
  return (
    <>
      <HeroBanner />
      <FeaturedTransfers />
      <HomeSection
        title="Explore Every Niché Jamaica Has to Offer"
        disableGutters
        maxWidth={false}
      >
        <ToursByType />
      </HomeSection>
      <FeaturedToursByLocation />
    </>
  );
}
