import Accordion from '@mui/material/Accordion';
import React, { useContext } from 'react';
import BookingContext from '@context/BookingContext';

export default function BookingAccordionComponent({ children, ...rest }) {
  const { expanded, handleExpanded } = useContext(BookingContext);

  return (
    <Accordion
      expanded={expanded}
      onChange={handleExpanded}
      TransitionProps={{ unmountOnExit: true }}
      elevation={0}
      {...rest}
    >
      {children}
    </Accordion>
  );
}
