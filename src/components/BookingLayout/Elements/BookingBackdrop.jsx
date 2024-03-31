import Backdrop from '@mui/material/Backdrop';
import React, { useContext } from 'react';
import BookingContext from '@context/BookingContext';

const backdropStyles = { zIndex: 9 };

export default function BookingBackdrop() {
  const { expanded, handleExpanded } = useContext(BookingContext);

  return (
    <Backdrop
      open={expanded}
      onClick={handleExpanded}
      sx={backdropStyles}
    />
  );
}
