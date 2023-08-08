import Paper from '@mui/material/Paper';
import React, { useContext, useEffect, useRef } from 'react';
import BookingContext from '@context/BookingContext';
import MaxWidthContainer from '@elements/MaxWidthContainer';

function usePreventScroll(expanded, paperRef) {
  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    const element = paperRef.current;

    if (element) {
      if (expanded) {
        element.addEventListener('wheel', preventScroll, {
          passive: false,
        });
      } else {
        element.removeEventListener('wheel', preventScroll);
      }

      return () => {
        element.removeEventListener('wheel', preventScroll);
      };
    }
  }, [expanded]);
}

const paperStyles = {
  top: {
    xxs: 0,
    sm: 63,
  },
  padding: 2,
  width: '100%',
  backgroundColor: 'black',
  zIndex: 10,
  position: 'sticky',
};

export default React.memo(function BookingPaper({ children, ...rest }) {
  const { expanded = false } = useContext(BookingContext);
  const paperRef = useRef(null);

  usePreventScroll(expanded, paperRef);

  return (
    <Paper
      id="bookingLayoutWrapper"
      ref={paperRef}
      square
      elevation={1}
      sx={paperStyles}
      {...rest}
    >
      <MaxWidthContainer disableStack>{children}</MaxWidthContainer>
    </Paper>
  );
});
