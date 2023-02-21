import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React from 'react';
import AccordionCard from './AccordionCard';
import { gridSpacingProps } from '@material/theme';
import { GridContainer } from '@elements/CustomGridEl';

function DestinationAccordion({
  name,
  link,
  destinations,
  expanded,
  handleChange,
}) {
  const destinationsCardElArray = destinations.map((destinaton) => (
    <AccordionCard
      key={destinaton.link}
      destination={destinaton}
      area={name}
      linkEnding={link}
    />
  ));

  return (
    <Accordion
      expanded={expanded === link}
      onChange={handleChange(link)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${link}-transfers-content`}
        id={`${link}-transfers-header`}
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <GridContainer
          spacing={gridSpacingProps}
          sx={{ alignItems: 'stretch' }}
        >
          {destinationsCardElArray}
        </GridContainer>
      </AccordionDetails>
    </Accordion>
  );
}

export default DestinationAccordion;
