import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner';
import FeaturedTransfers from './FeaturedTransfers/FeaturedTransfers';
import FeaturedToursByLocation from './FeaturedToursByStartLocation/FeaturedToursByStartLocation';
import ToursByType from '../ToursLayout/ToursByType/ToursByType';
import HomeSection from './Elements/HomeSection';
import PageLayoutStack from '../../elements/PageLayoutStack';

export default function HomeLayout() {
  return (
    <>
      <HeroBanner />
      <PageLayoutStack>
        <FeaturedTransfers />
        <HomeSection
          title="Pick Your Passion: Explore Every Hidden Gem Jamaica Has to Offer"
          disableGutters
          maxWidth={false}
        >
          <ToursByType />
        </HomeSection>
        <FeaturedToursByLocation />
      </PageLayoutStack>
    </>
  );
}
