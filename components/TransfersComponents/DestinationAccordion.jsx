import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
import AccordionCard from './AccordionCard';
import { gridSpacingProps } from '@material/theme';
import { GridContainer } from '@elements/CustomGridEl';

function ExpandIcon() {
  return (
    <IconButton>
      <ExpandMoreIcon />
    </IconButton>
  );
}

function DestinationCardArr({ areaData: data }) {
  const { destinations, ...areaData } = data;

  return destinations.map((destinaton) => (
    <AccordionCard
      key={destinaton.link}
      destinationData={destinaton}
      areaData={areaData}
    />
  ));
}

function DestinationAccordion({ areaData, expanded, handleChange }) {
  const { name, link } = areaData;

  return (
    <Accordion
      expanded={expanded === link}
      onChange={handleChange(link)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary
        expandIcon={<ExpandIcon />}
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
          <DestinationCardArr areaData={areaData} />
        </GridContainer>
      </AccordionDetails>
    </Accordion>
  );
}

export default DestinationAccordion;
