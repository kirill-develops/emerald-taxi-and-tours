import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext } from 'react';

import { MobileMenuContext } from '../MobilePagesMenu';
import { BreakpointContext } from '..';

export default function NavMenu({ children }) {
  const dissapearingBreakpoint = useContext(BreakpointContext);

  const isSmAndUpBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.up('sm'),
  );

  const { anchorElNav, handleCloseNavMenu } = useContext(MobileMenuContext);

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: isSmAndUpBreakpoint ? 'bottom' : 'top',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: isSmAndUpBreakpoint ? 'top' : 'bottom',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: {
          xxs: 'block',
          [dissapearingBreakpoint]: 'none',
        },
      }}
    >
      {children}
    </Menu>
  );
}
