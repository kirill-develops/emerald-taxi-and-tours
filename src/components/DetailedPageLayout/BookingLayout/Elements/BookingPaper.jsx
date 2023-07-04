import Paper from '@mui/material/Paper';
import React, { useContext, useEffect, useRef } from 'react';
import BookingContext from '@context/BookingContext';

const paperStyles = {
  top: { xxs: 0, sm: 63 },
  padding: 2,
  width: '100%',
  backgroundColor: 'black',
  zIndex: 10,
  position: 'sticky',
};

export default function BookingPaper({ children, ...rest }) {
  const { expanded = false } = useContext(BookingContext);

  const paperRef = useRef(null);

  useEffect(() => {
    if (expanded) {
      paperRef.current.style.position = 'absolute';
    } else {
      paperRef.current.style.position = 'sticky';
    }
  }, [expanded, paperRef]);

  return (
    <Paper
      id="bookingLayoutWrapper"
      ref={paperRef}
      square
      elevation={1}
      sx={paperStyles}
      {...rest}
    >
      {children}
    </Paper>
  );
}
