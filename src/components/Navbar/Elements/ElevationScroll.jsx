import useScrollTrigger from '@mui/material/useScrollTrigger';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

export default React.memo(function ElevationScroll({ children, window }) {
  const isXsBreakpoint = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  if (isXsBreakpoint) {
    return children;
  }

  return React.cloneElement(children, {
    elevation: trigger ? 5 : 2,
    sx: (theme) => ({
      ...children.props.sx,
      backgroundColor: trigger
        ? `${theme.palette.background.variant}bf`
        : `${theme.palette.background.variant}`,
    }),
  });
});
