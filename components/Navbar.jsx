import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import Link from '@material/Link';
import MobilePagesMenu from './NavbarComponents/MobilePagesMenu';
import MobileSearchModal from './NavbarComponents/MobileSearchModal';
import TabletPagesLink from './NavbarComponents/TabletPagesLink';

export const pages = [
  { name: 'Airport Transfer', link: 'transfer' },
  { name: 'Tours', link: 'tours' },
  { name: 'About Us', link: 'about' },
];

function ElevationScroll(props) {
  const { children, window } = props;

  const theme = useTheme();
  const isXsBreakpoint = useMediaQuery(theme.breakpoints.only('xs'));
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  if (isXsBreakpoint) {
    return children;
  }

  return React.cloneElement(children, {
    elevation: trigger ? 6 : 0,
  });
}

function Navbar(props) {
  const menuBreakpoint = 'md';

  return (
    <ElevationScroll {...props}>
      <AppBar
        sx={{
          position: { xs: 'fixed' },
          top: { xs: 'auto', sm: '0' },
          bottom: { xs: 0, sm: 'initial' },
        }}
      >
        <Toolbar>
          <MobilePagesMenu dissapearingBreakpoint={menuBreakpoint} />
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Typography
              variant="h6"
              component={Link}
              href="../"
              noWrap
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                textAlign: { xs: 'center', md: 'initial' },
              }}
            >
              Emerald Taxi & Tours
            </Typography>
          </Box>
          <TabletPagesLink dissapearingBreakpoint={menuBreakpoint} />
          <MobileSearchModal dissapearingBreakpoint={menuBreakpoint} />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Navbar;
