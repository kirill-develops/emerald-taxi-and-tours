import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import React, { createContext, useContext, useState } from 'react';
import NavIconButton from './Elements/NavIconButton';
import NavBreakpointContext from '@context/NavBreakpointContext';
import MobileDrawerLinks from '../MobileDrawerLinks';
import CloseDrawerButton from './Elements/CloseDrawerButton';

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

const paperProps = {
  sx: { minWidth: 350 },
  elevation: 10,
};

export default React.memo(function MobileDrawerButton() {
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
        PaperProps={paperProps}
      >
        <CloseDrawerButton clickHandler={handleDrawerClose} />
        <MobileDrawerLinks handleDrawerClose={handleDrawerClose} />
      </Drawer>
    </>
  );
});
