import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

export default React.memo(function ElevationScroll(props) {
  const { children, window } = props;

  const theme = useTheme();
  const isXsBreakpoint = useMediaQuery(theme.breakpoints.down('xs'));
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  if (isXsBreakpoint) {
    return children;
  }

  return React.cloneElement(children, {
    sx: {
      ...children.props.sx,
      opacity: trigger ? 0.9 : 1,
      backgroundColor: trigger
        ? 'rgba(0,0,0,0.9)'
        : (theme) => theme.palette.background.default,
      backdropFilter: trigger ? 'blur(100rem)' : undefined,
    },
  });
});
