import React from 'react';
import PageLayout from '@components/PageLayout/';
import HomeLayout from '@components/HomeLayout/';
import TourContext from '../context/TourContext';

export default function App() {
  return (
    <TourContext>
      <PageLayout>
        <HomeLayout />
      </PageLayout>
    </TourContext>
  );
}
