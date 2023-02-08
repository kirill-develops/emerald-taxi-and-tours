import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import Link from '../material/Link';
import MobilePagesMenu from './NavbarComponents/MobilePagesMenu';
import MobileSearchModal from './NavbarComponents/MobileSearchModal';
import TabletPagesLink from './NavbarComponents/TabletPagesLink';

export const pages = [
  { name: 'Airport Transfer', link: 'transfer' },
  { name: 'Tours', link: 'tours' },
  { name: 'About Us', link: 'about' },
];

function Navbar() {
  const menuBreakpoint = 'md';

  return (
    <AppBar
      sx={{
        position: { xs: 'fixed', sm: 'initial' },
        top: { xs: 'auto', sm: 'initial' },
        bottom: { xs: 0, sm: 'initial' },
      }}
    >
      <Toolbar>
        <MobilePagesMenu dissapearingBreakpoint={menuBreakpoint} />
        <Typography
          variant="h6"
          component={Link}
          href="/"
          noWrap
          sx={{
            flexGrow: 1,
            color: 'inherit',
            textDecoration: 'none',
            textAlign: { xs: 'center', md: 'initial' },
          }}
        >
          Emerald Taxi & Tours
        </Typography>
        <TabletPagesLink dissapearingBreakpoint={menuBreakpoint} />
        <MobileSearchModal dissapearingBreakpoint={menuBreakpoint} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
