import AccordionSummary from '@mui/material/AccordionSummary';
import { darken } from '@mui/material/';
import ExpandIconButton from '@elements/ExpandIconButton';
import React from 'react';

export default function BookingAccordionSummary({ children, ...rest }) {
  const accordionSummaryStyles = {
    backgroundColor: (theme) => darken(theme.palette.secondary.main, 0.2),
    borderRadius: 1,
  };
  return (
    <AccordionSummary
      expandIcon={<ExpandIconButton />}
      aria-controls="location-booking-form"
      sx={accordionSummaryStyles}
      {...rest}
    >
      {children}
    </AccordionSummary>
  );
}
