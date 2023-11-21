import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import { GridContainer } from '@elements/CustomGridEl';
import PageLayout from '@components/PageLayout/';

function Fallback() {
  return (
    <PageLayout>
      <GridContainer
        flexDirection="column"
        alignItems="stretch"
        justifyContent="center"
        sx={{
          flexGrow: 1,
        }}
      >
        <LinearProgress />
      </GridContainer>
    </PageLayout>
  );
}

export default Fallback;
