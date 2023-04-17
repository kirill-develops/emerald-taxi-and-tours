import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import { GridContainer } from '@elements/CustomGridEl';
import Layout from '@components/Layout';

function Fallback() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default Fallback;
