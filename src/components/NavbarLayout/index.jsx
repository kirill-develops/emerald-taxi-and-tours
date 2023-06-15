import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import React, { createContext } from 'react';

import MobilePagesMenu from './MobilePagesMenu';
import MobileSearchButton from './MobileSearchButton';
import TabletSearchButton from './TabletSearchButton';
import TabletPagesLink from './TabletPagesLink';
import ElevationScroll from './Elements/ElevationScroll';
import TitleWrapper from './TitleWrapper';
import useLoadingTransition from '@hooks/useLoadingTransition';
import MaxWidthContainer from '@elements/MaxWidthContainer';

export const BreakpointContext = createContext();

const SiteAppBar = styled(AppBar)(({ theme }) =>
  theme.unstable_sx({
    position: { xxs: 'fixed' },
    top: { xxs: 'auto', sm: '0' },
    bottom: { xxs: 0, sm: 'initial' },
    backgroundColor: (theme) => theme.palette.background.default,
  }),
);

export default function NavbarLayout(props) {
  const menuBreakpoint = 'md';
  const loadingTransitionStyle = useLoadingTransition();

  return (
    <BreakpointContext.Provider value={menuBreakpoint}>
      <ElevationScroll {...props}>
        <SiteAppBar elevation={1}>
          <MaxWidthContainer disableGutters>
            <Toolbar sx={{ ...loadingTransitionStyle }}>
              <MobilePagesMenu dissapearingBreakpoint={menuBreakpoint} />
              <TitleWrapper />
              <TabletPagesLink />
              <MobileSearchButton dissapearingBreakpoint={menuBreakpoint} />
              <TabletSearchButton dissapearingBreakpoint={menuBreakpoint} />
            </Toolbar>
          </MaxWidthContainer>
        </SiteAppBar>
      </ElevationScroll>
    </BreakpointContext.Provider>
  );
}
