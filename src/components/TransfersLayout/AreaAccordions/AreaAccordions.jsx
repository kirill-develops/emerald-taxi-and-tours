import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import TransferGrid from './Elements/TransferGridContainer';
import DestinationCards from './Elements/DestinationCards';
import AccordionSummaryEl from './Elements/AccordionSummaryEl';
import SectionTitle from '@elements/SectionTitle';

export default React.memo(function AreaAccordionArr({ transferData, title }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderAccordion = (areaData) => {
    const { link, name } = areaData;
    const isExpanded = expanded === link;

    return (
      <Accordion
        key={link}
        expanded={isExpanded}
        onChange={handleExpand(link)}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummaryEl link={link}>
          <Typography variant="h5">{name}</Typography>
        </AccordionSummaryEl>
        <AccordionDetails>
          <TransferGrid>
            <DestinationCards areaData={areaData} />
          </TransferGrid>
        </AccordionDetails>
      </Accordion>
    );
  };

  const renderedAccordions = transferData.map(renderAccordion);

  return (
    <Stack rowGap={1}>
      <SectionTitle maxWidth="xl">{title}</SectionTitle>
      <Container maxWidth="lg">{renderedAccordions}</Container>
    </Stack>
  );
});
