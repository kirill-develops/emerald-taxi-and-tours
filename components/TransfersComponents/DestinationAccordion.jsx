import ExpandMore from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import AccordionCard from './AccordionCard';

function DestinationAccordion({
  name,
  link,
  destinations,
  expanded,
  handleChange,
}) {
  const destinationsCardArray = destinations.map((destinaton) => (
    <AccordionCard
      key={destinaton.link}
      destination={destinaton}
      area={name}
      linkEnding={link}
    />
  ));

  const gridSpacingProps = { xs: 1, sm: 2, md: 3, lg: 3.5 };

  return (
    <Accordion
      expanded={expanded === link}
      onChange={handleChange(link)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${link}-transfers-content`}
        id={`${link}-transfers-header`}
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid
          container
          spacing={gridSpacingProps}
          sx={{ alignItems: 'stretch' }}
        >
          {destinationsCardArray}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default DestinationAccordion;
