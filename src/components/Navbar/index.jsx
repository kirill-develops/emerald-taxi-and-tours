import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import React from 'react';

import MobileDrawerButton from './Mobile/DrawerButton/MobileDrawerButton';
import MobileSearchButton from './Mobile/MobileSearchButton';
import TabletSearchButton from './Tablet/SearchButton/TabletSearchButton';
import TabletPageLinks from './Tablet/PageLinks/TabletPageLinks';
import ElevationScroll from './Elements/ElevationScroll';
import TitleWrapper from './TitleWrapper/TitleWrapper';
import useLoadingTransition from './hooks/useLoadingTransition';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import NavBreakpointContext from '@context/NavBreakpointContext';
import DarkModeSwitch from './Mobile/DrawerButton/Elements/DarkModeSwitch';

const SiteAppBar = styled(AppBar)(({ theme }) =>
  theme.unstable_sx({
    position: { xxs: 'fixed' },
    top: { xxs: 'auto', sm: '0' },
    bottom: { xxs: 0, sm: 'initial' },
    backdropFilter: 'blur(7.5px)',
    backgroundColor: `${theme.palette.background.variant}df`,
    color: theme.palette.background.variantText,
  }),
);

export default function NavbarLayout(props) {
  const menuBreakpoint = 'md';
  const loadingTransitionStyle = useLoadingTransition();

  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.up(menuBreakpoint),
  );

  return (
    <NavBreakpointContext.Provider value={menuBreakpoint}>
      <ElevationScroll {...props}>
        <SiteAppBar>
          <MaxWidthContainer
            maxWidth="lg"
            disableGutters
            disableStack
          >
            <Toolbar sx={{ ...loadingTransitionStyle }}>
              <MobileDrawerButton dissapearingBreakpoint={menuBreakpoint} />
              <TitleWrapper />
              <TabletPageLinks />

              <MobileSearchButton dissapearingBreakpoint={menuBreakpoint} />
              <TabletSearchButton dissapearingBreakpoint={menuBreakpoint} />
              {isTablet ? (
                <Box sx={{ pl: 2 }}>
                  <DarkModeSwitch isTablet />
                </Box>
              ) : null}
            </Toolbar>
          </MaxWidthContainer>
        </SiteAppBar>
      </ElevationScroll>
    </NavBreakpointContext.Provider>
  );
}
