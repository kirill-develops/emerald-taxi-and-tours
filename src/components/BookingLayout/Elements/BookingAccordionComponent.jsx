import useMediaQuery from '@mui/material/useMediaQuery';
import Accordion from '@mui/material/Accordion';
import React, { useCallback, useContext } from 'react';
import BookingContext from '@context/BookingContext';

export default function BookingAccordionComponent({ children, ...rest }) {
  const { expanded, setExpanded, setCookie, paperRef } =
    useContext(BookingContext);

  const isXs = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const screenPosition = isXs ? 0 : 130;

  const handleExpand = useCallback(() => {
    if (!expanded) {
      paperRef.current.style.position = 'relative';

      const rect = paperRef.current.getBoundingClientRect();
      const isBelowTopViewport = rect.top > screenPosition;

      if (!isBelowTopViewport) {
        paperRef.current.scrollIntoView({
          behavior: 'auto',
        });

        setTimeout(() => {
          setExpanded(!expanded);
          setCookie({ isBookingOpen: !expanded });
        }, 50);
      } else {
        setExpanded(!expanded);
        setCookie({ isBookingOpen: !expanded });
      }
    } else {
      paperRef.current.style.position = 'sticky';
      setExpanded(!expanded);
      setCookie({ isBookingOpen: !expanded });
    }
  }, [expanded, setExpanded, setCookie, paperRef, screenPosition]);

  return (
    <Accordion
      expanded={expanded}
      onChange={handleExpand}
      TransitionProps={{ unmountOnExit: true }}
      elevation={0}
      {...rest}
    >
      {children}
    </Accordion>
  );
}
