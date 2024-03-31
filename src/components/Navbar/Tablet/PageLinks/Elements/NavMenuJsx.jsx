import MenuItem from '@mui/material/MenuItem';
import Link from '@material/Link';
import React from 'react';
import NavMenu from './NavMenu';
import useFindCurrentPage from '../../../hooks/useFindCurrentPage';

export default function NavMenuJsx({
  open,
  handleMouseOnMenu,
  closeNavMenu,
  nested,
  link,
  menuRef,
}) {
  const selected = useFindCurrentPage(nested);

  return nested ? (
    <NavMenu
      anchorEl={open?.target}
      onClose={closeNavMenu}
      key={link}
      PaperProps={{
        onMouseLeave: closeNavMenu,
        onMouseEnter: handleMouseOnMenu,
        ref: menuRef,
        elevation: 4,
        sx: (theme) => ({
          backgroundColor: theme.palette.background.variant,
          color: theme.palette.background.variantText,
          marginTop: `-${theme.spacing(0.5)}`,
          zIndex: theme.zIndex.drawer,
        }),
      }}
      sx={{ zIndex: 1000 }}
    >
      {nested?.map(({ name: nestedName, link: nestedLink }) => (
        <MenuItem
          onClick={() => closeNavMenu(link)}
          key={nestedLink}
          component={Link}
          href={`${link}${nestedLink}`}
          selected={selected === nestedLink}
        >
          {nestedName}
        </MenuItem>
      ))}
    </NavMenu>
  ) : null;
}
