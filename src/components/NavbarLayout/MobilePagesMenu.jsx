import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import React, { createContext, useContext, useState } from 'react';
import Link from '@material/Link';
import sitePages from '@data/sitePages';
import { styled } from '@mui/material';
import NavIconButton from './Elements/NavIconButton';
import NavMenu from './Elements/NavMenu';
import { BreakpointContext } from '.';

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
  const dissapearingBreakpoint = useContext(BreakpointContext);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };

  const contextValue = { anchorElNav, handleOpenNavMenu, handleCloseNavMenu };

  return (
    <MobileMenuContext.Provider value={contextValue}>
      <Wrapper dissapearingbreakpoint={dissapearingBreakpoint}>
        <NavIconButton handleOpenNavMenu={handleOpenNavMenu}>
          <MenuIcon />
        </NavIconButton>
        <NavMenu>
          {sitePages.map(({ name, link }) => (
            <MenuItem
              key={link}
              onClick={handleCloseNavMenu}
            >
              <Typography
                component={Link}
                href={`/${link}`}
                textAlign="center"
                sx={{ textDecoration: 'none' }}
              >
                {name}
              </Typography>
            </MenuItem>
          ))}
        </NavMenu>
      </Wrapper>
    </MobileMenuContext.Provider>
  );
});
