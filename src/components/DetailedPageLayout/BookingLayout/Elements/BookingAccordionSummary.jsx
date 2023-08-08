import AccordionSummary from '@mui/material/AccordionSummary';
import { CardActionArea, darken } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react';

export default function BookingAccordionSummary({ children, ...rest }) {
  const accordionSummaryStyles = {
    backgroundColor: (theme) => darken(theme.palette.secondary.main, 0.2),
    borderRadius: 1,
  };
  return (
    <CardActionArea component="div">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="location-booking-form"
        sx={accordionSummaryStyles}
        {...rest}
      >
        {children}
      </AccordionSummary>
    </CardActionArea>
  );
}
