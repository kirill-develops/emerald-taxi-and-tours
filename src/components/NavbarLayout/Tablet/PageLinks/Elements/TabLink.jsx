import Tab from '@mui/material/Tab';
import React from 'react';
import Link from '@material/Link';

const tabStyles = (isOpen) => ({
  color: isOpen ? 'primary.main' : 'text.primary',
  textDecoration: 'none',
  '&:hover': { color: (theme) => theme.palette.primary.main },
});

export default React.memo(function TabLink({ open, value, ...props }) {
  const isMenuOpen = open?.link === value;

  return (
    <Tab
      component={Link}
      sx={() => tabStyles(isMenuOpen)}
      {...props}
    />
  );
});
