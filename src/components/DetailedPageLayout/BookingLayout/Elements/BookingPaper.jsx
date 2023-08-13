import Box from '@mui/material/Box';
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
  }, [expanded, paperRef]);
}

const paperStyles = {
  top: {
    xxs: 0,
    sm: 63,
  },
  padding: 2,
  width: '100%',
  zIndex: 10,
  position: 'sticky',
  borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
  backdropFilter: 'blur(10.5px)',
  backgroundColor: (theme) => `${theme.palette.background.paper}bf`,
};

export default React.memo(function BookingPaper({ children, ...rest }) {
  const { expanded = false } = useContext(BookingContext);
  const paperRef = useRef(null);

  usePreventScroll(expanded, paperRef);

  return (
    <Box
      id="bookingLayoutWrapper"
      ref={paperRef}
      sx={paperStyles}
      {...rest}
    >
      <MaxWidthContainer
        disableStack
        disableGutters
      >
        {children}
      </MaxWidthContainer>
    </Box>
  );
});
