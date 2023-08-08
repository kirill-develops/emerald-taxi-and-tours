import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

export default React.memo(function ElevationScroll(props) {
  const { children } = props;

  const theme = useTheme();
  const isXsBreakpoint = useMediaQuery(theme.breakpoints.down('xs'));
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  if (isXsBreakpoint) {
    return children;
  }

  return React.cloneElement(children, {
    sx: {
      ...children.props.sx,
      elevation: 0,
      backgroundColor: trigger
        ? 'rgba(0,0,0,0.75)'
        : (theme) => theme.palette.background.default,
      backdropFilter: trigger ? 'blur(3.5px)' : undefined,
    },
  });
});
