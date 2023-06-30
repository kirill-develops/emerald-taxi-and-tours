import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandIconButton from '@elements/ExpandIconButton';
import React from 'react';

export default function AccordionSummaryEl({ link, children, ...rest }) {
  return (
    <AccordionSummary
      expandIcon={<ExpandIconButton />}
      aria-controls={`${link}-transfers-content`}
      id={`${link}-transfers-header`}
      {...rest}
    >
      {children}
    </AccordionSummary>
  );
}
