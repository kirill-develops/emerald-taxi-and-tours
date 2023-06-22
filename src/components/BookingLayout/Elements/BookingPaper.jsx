import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';

function getPaperStyles(expanded = false) {
  return {
    top: { xs: 0, sm: expanded ? 0 : 64 },
    padding: 3,
    backgroundColor: 'black',
    zIndex: 10,
  };
}

export default function BookingPaper({
  children,
  paperRef,
  expanded = false,
  ...rest
}) {
  const paperStyles = getPaperStyles(expanded);

  useEffect(() => {
    if (expanded) {
      paperRef.current.style.position = 'relative';
    } else {
      paperRef.current.style.position = 'sticky';
    }
  }, [expanded, paperRef]);

  return (
    <Paper
      id="bookingLayoutWrapper"
      ref={paperRef}
      square
      sx={paperStyles}
      {...rest}
    >
      {children}
    </Paper>
  );
}
