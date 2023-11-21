import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';

import SectionTitle from '@elements/SectionTitle';
import AreaAccordion from './AreaAccordion';

export default React.memo(function AreaAccordionArr({ transferData, title }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack rowGap={{ xxs: 0.5, sm: 1, md: 2 }}>
      <SectionTitle maxWidth="lg">{title}</SectionTitle>
      <Container maxWidth="lg">
        {transferData.map((data) => (
          <AreaAccordion
            areaData={data}
            expanded={expanded}
            handleExpand={handleExpand}
            key={data.link}
          />
        ))}
      </Container>
    </Stack>
  );
});
