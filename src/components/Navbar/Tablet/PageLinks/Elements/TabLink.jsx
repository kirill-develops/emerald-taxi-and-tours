import Tab from '@mui/material/Tab';
import React from 'react';
import Link from '@material/Link';

const tabStyleGetter = (isOpen) => (theme) => ({
  typography: 'navLink',
  textDecoration: 'none',
  ...(isOpen && { color: theme.palette.secondary.main }),
  '&:hover': { color: theme.palette.secondary.main },
});

export default React.memo(function TabLink({ open, value, ...props }) {
  const isMenuOpen = open?.link === value;
  const tabStyles = tabStyleGetter(isMenuOpen);

  return (
    <Tab
      component={Link}
      sx={tabStyles}
      value={value}
      {...props}
    />
  );
});
