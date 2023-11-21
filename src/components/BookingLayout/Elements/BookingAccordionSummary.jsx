import AccordionSummary from '@mui/material/AccordionSummary';
import CardActionArea from '@mui/material/CardActionArea';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react';

const accordionSummaryStyles = {
  backgroundColor: (theme) => theme.palette.primary.main,
  color: (theme) => theme.palette.primary.contrastText,
  borderRadius: 1,
};

const iconStyles = { color: (theme) => theme.palette.primary.contrastText };

export default function BookingAccordionSummary({ children, ...rest }) {
  return (
    <CardActionArea component="div">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={iconStyles} />}
        aria-controls="location-booking-form"
        sx={accordionSummaryStyles}
        {...rest}
      >
        {children}
      </AccordionSummary>
    </CardActionArea>
  );
}
