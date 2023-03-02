import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import DestinationAccordion from '@Transfer/DestinationAccordion';

function AreaAccordionArr({ transferData, title }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Typography
        variant="h3"
        component="h2"
      >
        {title}
      </Typography>
      <Container maxWidth="lg">
        {transferData.map((areaData) => {
          const { link } = areaData;
          return (
            <DestinationAccordion
              key={link}
              areaData={areaData}
              expanded={expanded}
              handleChange={handleChange}
            />
          );
        })}
      </Container>
    </>
  );
}

export default AreaAccordionArr;
