import PageLayout from '@layouts/PageLayout/';
import Error from 'next/error';
import React from 'react';

export default function Error404() {
  return (
    <PageLayout>
      <Error
        statusCode={'404'}
        title={'This page could not be found'}
      />
    </PageLayout>
  );
}
