import React from 'react';
import FeaturedTransfers from '../../components/FeaturedTransfers/';
import FeaturedToursByStartLocation from '../../components/FeaturedToursByStartLocation';
import ToursByType from '../../components/ToursByType';
import HomeSection from '@elements/HomeSection';
import PageLayoutStack from '../../elements/PageLayoutStack';

export default function HomeLayout() {
  return (
    <>
      <PageLayoutStack>
        <FeaturedTransfers />
        <HomeSection
          title="Tour Jamaica's Hidden Gems with Us!"
          titleHighlight="Tour"
          disableGutters
          maxWidth={false}
        >
          <ToursByType />
        </HomeSection>
        <FeaturedToursByStartLocation />
      </PageLayoutStack>
    </>
  );
}
