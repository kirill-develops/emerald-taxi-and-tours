import PageLayout from '@components/PageLayout/Layout';
import Error from 'next/error';
import React from 'react';

export default function error404() {
  return (
    <PageLayout>
      <Error
        statusCode={'404'}
        title={'This page could not be found'}
      />
    </PageLayout>
  );
}
