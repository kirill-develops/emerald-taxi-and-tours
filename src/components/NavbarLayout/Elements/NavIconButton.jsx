import IconButton from '@mui/material/IconButton';
import React from 'react';

export default function NavIconButton({
  children,
  handleOpenNavMenu,
  ...other
}) {
  return (
    <IconButton
      size="large"
      aria-label="menu of pages"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      {...other}
    >
      {children}
    </IconButton>
  );
}
