import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';
import Link from '@material/Link';
import MobilePagesMenu from './MobilePagesMenu';
import MobileSearchModal from './MobileSearchModal';
import TabletPagesLink from './TabletPagesLink';
import emeraldLogo from '@Public/logo/emerald_logo_v2.png';
import useLoadingTransition from '@hooks/useLoadingTransition';

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

function NavbarLayout(props) {
  const menuBreakpoint = 'md';

  const loadingTransitionStyle = useLoadingTransition();

  return (
    <ElevationScroll {...props}>
      <AppBar
        sx={{
          position: { xs: 'fixed' },
          top: { xs: 'auto', sm: '0' },
          bottom: { xs: 0, sm: 'initial' },
          backgroundColor: (theme) => theme.palette.background.default,
          ...loadingTransitionStyle,
        }}
      >
        <Toolbar>
          <MobilePagesMenu dissapearingBreakpoint={menuBreakpoint} />
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              flexGrow: 1,
              justifyContent: { xs: 'center', md: 'initial' },
              alignItems: 'center',
              position: 'relative',
              flexWrap: 'nowrap',
            }}
          >
            <Link
              href="/"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Image
                src={emeraldLogo}
                alt="Emerald Taxi & Tour Logo"
                width={42}
                quality={100}
                blurDataURL
              />
            </Link>
            <Typography
              variant="h5"
              component={Link}
              color="secondary.light"
              href="/"
              noWrap
              sx={{
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Emerald{' '}
              <Typography
                variant="h6"
                component="span"
                color="text.primary"
                sx={{
                  textTransform: 'capitalize',
                }}
              >
                Taxi & Tours
              </Typography>
            </Typography>
          </Stack>
          <TabletPagesLink dissapearingBreakpoint={menuBreakpoint} />
          <MobileSearchModal dissapearingBreakpoint={menuBreakpoint} />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default NavbarLayout;
