import Tabs from '@mui/material/Tabs';
import React, { useContext } from 'react';
import { BreakpointContext } from '..';

export default function NavTabs({ children, ...rest }) {
  const dissapearingBreakpoint = useContext(BreakpointContext);

  return (
    <Tabs
      indicatorColor="secondary"
      aria-label="page links"
      centered
      sx={{
        alignSelf: 'stretch',
        flexGrow: 1,
        flexBasis: 'content',
        display: {
          xs: 'none',
          [dissapearingBreakpoint]: 'flex',
        },
      }}
      {...rest}
    >
      {children}
    </Tabs>
  );
}
