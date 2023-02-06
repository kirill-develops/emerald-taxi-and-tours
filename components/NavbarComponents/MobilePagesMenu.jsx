import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import Link from '../../material/Link';
import { pages } from '../Navbar';
import { useTheme } from '@emotion/react';

function MobilePagesMenu({ dissapearingBreakpoint }) {
  const theme = useTheme();
  const isSmallOrMore = useMediaQuery(theme.breakpoints.up('sm'));

  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: {
          xs: 'flex',
          [dissapearingBreakpoint]: 'none',
        },
      }}
    >
      <IconButton
        size="large"
        aria-label="menu of pages"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: isSmallOrMore ? 'bottom' : 'top',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: isSmallOrMore ? 'top' : 'bottom',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: {
            xs: 'block',
            [dissapearingBreakpoint]: 'none',
          },
        }}
      >
        {pages.map(({ name, link }) => (
          <MenuItem
            key={link}
            onClick={handleCloseNavMenu}
          >
            <Typography
              component={Link}
              href={`./${link}`}
              textAlign="center"
              sx={{ textDecoration: 'none' }}
            >
              {name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default MobilePagesMenu;
