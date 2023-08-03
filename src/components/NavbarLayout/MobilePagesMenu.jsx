import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import React, { createContext, useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import NavIconButton from './Elements/NavIconButton';
import NavBreakpointContext from '@context/NavBreakpointContext';
import Drawer from '@mui/material/Drawer';
import MobileDrawerLinks from './Elements/MobileDrawerLinks';

export const MobileMenuContext = createContext();

const Wrapper = styled(Box)(({ theme, dissapearingbreakpoint }) =>
  theme.unstable_sx({
    flexGrow: 1,
    display: {
      xxs: 'flex',
      [dissapearingbreakpoint]: 'none',
    },
  }),
);

export default React.memo(function MobilePagesMenu() {
  const dissapearingBreakpoint = useContext(NavBreakpointContext);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Wrapper dissapearingbreakpoint={dissapearingBreakpoint}>
        <NavIconButton handleDrawerOpen={handleDrawerOpen}>
          <MenuIcon />
        </NavIconButton>
      </Wrapper>
      <Drawer
        open={open}
        onClose={handleDrawerClose}
        PaperProps={{ sx: { minWidth: 350 } }}
      >
        <MobileDrawerLinks handleDrawerClose={handleDrawerClose} />
      </Drawer>
    </>
  );
});
