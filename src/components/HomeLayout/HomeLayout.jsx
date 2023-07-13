import React from 'react';
import HeroBanner from './Elements/HeroBanner';
import FeaturedTransfers from './Elements/FeaturedTransfers';
import FeaturedToursByLocation from './Elements/FeaturedToursByLocation';

export default function HomeLayout() {
  return (
    <>
      <HeroBanner />
      <FeaturedTransfers />
      <FeaturedToursByLocation />
    </>
  );
}
