import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext, useMemo } from 'react';
import NavBreakpointContext from '@context/NavBreakpointContext';

export default function NavMenu({ anchorEl, children, sx, ...rest }) {
  const dissapearingBreakpoint = useContext(NavBreakpointContext);

  const menuStyles = useMemo(
    () => ({
      display: {
        xxs: 'none',
        [dissapearingBreakpoint]: 'block',
      },
      ...sx,
    }),
    [dissapearingBreakpoint, sx],
  );

  const isSmAndUpBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.up('sm'),
  );

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: isSmAndUpBreakpoint ? 'bottom' : 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: isSmAndUpBreakpoint ? 'top' : 'bottom',
        horizontal: 'left',
      }}
      open={Boolean(anchorEl)}
      sx={menuStyles}
      {...rest}
    >
      {children}
    </Menu>
  );
}
