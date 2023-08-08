import Tabs from '@mui/material/Tabs';
import React, { useContext } from 'react';
import NavBreakpointContext from '@context/NavBreakpointContext';

export default function NavTabs({ children, ...rest }) {
  const dissapearingBreakpoint = useContext(NavBreakpointContext);

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
          xxs: 'none',
          [dissapearingBreakpoint]: 'flex',
        },
      }}
      {...rest}
    >
      {children}
    </Tabs>
  );
}
