import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import DestinationAccordion from '../components/TransfersComponents/DestinationAccordion';
import {
  normanManleyTransferData,
  sangsterTransferData,
} from '../data/transfers';

function useAccordionElArray(transferData) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return transferData.map(({ name, link, destinations }) => {
    return (
      <DestinationAccordion
        key={link}
        name={name}
        link={link}
        destinations={destinations}
        expanded={expanded}
        handleChange={handleChange}
      />
    );
  });
}

function Transfer() {
  const sangsterAccordionElArray = useAccordionElArray(sangsterTransferData);

  const normanManleyAccordionElArray = useAccordionElArray(
    normanManleyTransferData,
  );

  return (
    <main>
      <Layout>
        <Typography>AIRPORT TRANSFERS</Typography>
        <Typography>Sangster International, Montego Bay</Typography>
        <Container maxWidth="lg">{sangsterAccordionElArray}</Container>
        <Typography>Norman Manley International, Kingston</Typography>
        <Container maxWidth="lg">{normanManleyAccordionElArray}</Container>
      </Layout>
    </main>
  );
}

export default Transfer;
