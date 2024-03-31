import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import React from 'react';

import AccordionSummaryEl from './Elements/AccordionSummaryEl';
import CardTitle from '@elements/CardTitle';
import DestinationCards from './DestinationCard/DestinationCards';
import TransferGridContainer from './Elements/TransferGridContainer';

const accordionStyles = {
  backgroundColor: (theme) => theme.palette.secondary.main,
  color: (theme) => theme.palette.secondary.contrastText,
};

export default React.memo(function AreaAccordion({
  areaData,
  expanded,
  handleExpand,
}) {
  const { link, name } = areaData;
  const isExpanded = expanded === link;

  return (
    <Accordion
      key={link}
      expanded={isExpanded}
      onChange={handleExpand(link)}
      TransitionProps={{ unmountOnExit: true }}
      sx={accordionStyles}
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
});
