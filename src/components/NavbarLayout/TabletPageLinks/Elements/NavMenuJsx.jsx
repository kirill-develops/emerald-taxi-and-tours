import MenuItem from '@mui/material/MenuItem';
import Link from '@material/Link';
import React from 'react';
import NavMenu from '../../Elements/NavMenu';

export default function NavMenuJsx({
  open,
  handleMouseOnMenu,
  closeNavMenu,
  nested,
  link,
}) {
  return nested ? (
    <NavMenu
      anchorEl={open?.target}
      onClose={closeNavMenu}
      key={link}
      PaperProps={{
        onMouseLeave: closeNavMenu,
        onMouseEnter: handleMouseOnMenu,
      }}
      sx={{ zIndex: 1000 }}
    >
      {nested?.map(({ name: nestedName, link: nestedLink }) => (
        <MenuItem
          onClick={() => closeNavMenu(link)}
          key={nestedLink}
          component={Link}
          href={`${link}${nestedLink}`}
        >
          {nestedName}
        </MenuItem>
      ))}
    </NavMenu>
  ) : null;
}
