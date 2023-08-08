import AccordionSummary from '@mui/material/AccordionSummary';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { CardActionArea } from '@mui/material';

export default function AccordionSummaryEl({ link, children, ...rest }) {
  return (
    <CardActionArea
      component="div"
      disableRipple
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${link}-transfers-content`}
        id={`${link}-transfers-header`}
        {...rest}
      >
        {children}
      </AccordionSummary>
    </CardActionArea>
  );
}
