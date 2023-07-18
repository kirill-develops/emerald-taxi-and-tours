import Stack from '@mui/material/Stack';
import React from 'react';
import SiteLinks from './Elements/SiteLinks';
import Copyright from './Elements/Copyright';

const footerBoxStyles = {
  backgroundColor: (theme) => theme.palette.background.paper,
  overflow: 'auto',
  py: '1em',
  mt: 5,
};

function FooterStack({ children }) {
  return (
    <Stack
      component="footer"
      rowGap={4}
      sx={footerBoxStyles}
    >
      {children}
    </Stack>
  );
}

export default function FooterLayout() {
  return (
    <FooterStack>
      <SiteLinks />
      <Copyright />
    </FooterStack>
  );
}
