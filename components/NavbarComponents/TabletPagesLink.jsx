import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import Link from '../../material/Link';
import { pages } from '../Navbar';

function TabletPagesLink({ dissapearingBreakpoint }) {
  const pageAnchorElArray = pages.map(({ name, link }) => (
    <Button
      key={link}
      LinkComponent={Link}
      href={`../${link}`}
      sx={{
        display: 'block',
        color: 'text.primary',
        textDecoration: 'none',
      }}
    >
      {name}
    </Button>
  ));

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: {
          xs: 'none',
          [dissapearingBreakpoint]: 'flex',
        },
      }}
    >
      {pageAnchorElArray}
    </Box>
  );
}

export default TabletPagesLink;
