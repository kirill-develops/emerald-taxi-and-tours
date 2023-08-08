import Tab from '@mui/material/Tab';
import React from 'react';
import Link from '@material/Link';

export default React.memo(function TabLink(props) {
  const tabStyles = {
    color: 'text.primary',
    textDecoration: 'none',
  };

  return (
    <Tab
      component={Link}
      sx={tabStyles}
      {...props}
    />
  );
});
