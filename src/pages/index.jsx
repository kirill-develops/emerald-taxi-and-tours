import React from 'react';
import PageLayout from '@components/PageLayout/Layout';
import HomeLayout from '@components/HomeLayout/HomeLayout';
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
