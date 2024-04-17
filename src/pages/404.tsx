import PageLayout from '@layouts/PageLayout/';
import Error from 'next/error';
import React from 'react';

const Error404: React.FC = () => {
  return (
    <PageLayout>
      <Error
        statusCode={404}
        title={'This page could not be found'}
      />
    </PageLayout>
  );
}

export default Error404;