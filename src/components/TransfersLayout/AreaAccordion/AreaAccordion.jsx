import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import React from 'react';

import AccordionSummaryEl from './Elements/AccordionSummaryEl';
import CardTitle from '@elements/CardTitle';
import DestinationCards from './DestinationCard/DestinationCards';
import TransferGridContainer from './Elements/TransferGridContainer';

export default function AreaAccordion({ areaData, expanded, handleExpand }) {
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
        <CardTitle>{name}</CardTitle>
      </AccordionSummaryEl>
      <AccordionDetails>
        <TransferGridContainer>
          <DestinationCards areaData={areaData} />
        </TransferGridContainer>
      </AccordionDetails>
    </Accordion>
  );
}
