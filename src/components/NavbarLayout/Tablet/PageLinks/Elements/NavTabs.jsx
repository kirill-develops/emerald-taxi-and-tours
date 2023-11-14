import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import NavBreakpointContext from '@context/NavBreakpointContext';

const StyledTabs = styled(
  (props) => (
    <Tabs
      centered
      aria-label="page navigation links"
      textColor="inherit"
      {...props}
    />
  ),
  {
    shouldForwardProp: (prop) => prop !== 'dissapearingBreakpoint',
  },
)(({ theme, dissapearingBreakpoint }) =>
  theme.unstable_sx({
    alignSelf: 'stretch',
    flexGrow: 1,
    flexBasis: 'content',
    display: {
      xxs: 'none',
      [dissapearingBreakpoint]: 'flex',
    },
  }),
);

export default React.memo(function NavTabs({ children, ...rest }) {
  const dissapearingBreakpoint = useContext(NavBreakpointContext);

  return (
    <StyledTabs
      dissapearingBreakpoint={dissapearingBreakpoint}
      {...rest}
    >
      {children}
    </StyledTabs>
  );
});
