import Tab from '@mui/material/Tab';
import React from 'react';
import Link from '@material/Link';

const tabStyles = (isOpen, theme) => ({
  typography: 'subtitle2',
  textDecoration: 'none',
  ...(isOpen && { color: theme.palette.secondary.main }),
  '&:hover': { color: theme.palette.secondary.main },
});

export default React.memo(function TabLink({ open, value, ...props }) {
  const isMenuOpen = open?.link === value;

  return (
    <Tab
      component={Link}
      sx={(theme) => tabStyles(isMenuOpen, theme)}
      value={value}
      {...props}
    />
  );
});
