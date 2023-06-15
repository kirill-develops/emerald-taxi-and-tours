import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import React from 'react';
import Link from '@material/Link';
import MobilePagesMenu from './Mobile/MobilePagesMenu';
// import MobileSearchModal from './MobileSearchModal';
import TabletPagesLink from './Laptop/TabletPagesLink';
import emeraldLogo from '@Public/logo/emerald_logo_v2.png';
import useLoadingTransition from '@hooks/useLoadingTransition';
// import MaxWidthContainer from '@elements/MaxWidthContainer';
import ElevationScroll from './Elements/ElevationScroll';

export default function NavbarLayout(props) {
  const menuBreakpoint = 'md';
  const isXsBreakpoint = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const loadingTransitionStyle = useLoadingTransition();

  return (
    <ElevationScroll {...props}>
      <AppBar
        elevation={1}
        sx={{
          position: { xxs: 'fixed' },
          top: { xxs: 'auto', sm: '0' },
          bottom: { xxs: 0, sm: 'initial' },
          backgroundColor: (theme) => theme.palette.background.default,
          ...loadingTransitionStyle,
        }}
      >
        {/* <MaxWidthContainer disableGutters> */}
        <Toolbar sx={{ ...loadingTransitionStyle }}>
          <MobilePagesMenu dissapearingBreakpoint={menuBreakpoint} />
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              flexGrow: 1,
              justifyContent: { xxs: 'center', md: 'initial' },
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
            {!isXsBreakpoint && (
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
            )}
          </Stack>
          <TabletPagesLink dissapearingBreakpoint={menuBreakpoint} />
          {/* <MobileSearchModal dissapearingBreakpoint={menuBreakpoint} /> */}
        </Toolbar>
        {/* </MaxWidthContainer> */}
      </AppBar>
    </ElevationScroll>
  );
}
