import React from 'react';
import PageLayout from '@layouts/PageLayout/';
import HomeLayout from '@layouts/HomeLayout/';
import TourContext from '../context/TourContext';

export default function App() {
  return (
    <TourContext>
      <PageLayout heroBanner>
        <HomeLayout />
      </PageLayout>
    </TourContext>
  );
}
