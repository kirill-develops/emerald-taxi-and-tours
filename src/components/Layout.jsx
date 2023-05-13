import dynamic from 'next/dynamic';

const Container = dynamic(() => import('@mui/material/Container'));
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';

import usePageTransition from '@hooks/usePageTransition';
const LayoutTitle = dynamic(() => import('@elements/LayoutTitle'));
const Copyright = dynamic(() => import('./Copyright'));
const Navbar = dynamic(() => import('@Navbar/NavbarLayout'));
const ContactSpeedDial = dynamic(() => import('./ContactSpeedDial'));

const GridContainer = dynamic(() =>
  import('@elements/CustomGridEl').then((mod) => mod.GridContainer),
);

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Layout({ children, title = '', subheader = '', airport = '' }) {
  const showComponent = usePageTransition();

  const theme = useTheme();
  const isXsBreakpoint = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <>
      <Navbar />
      {!isXsBreakpoint && <Offset />}
      <Container
        maxWidth="xl"
        sx={{
          minHeight: { sm: '100%' },
          // overflow: { sm: 'initial' },
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
        className={`component-fade ${showComponent ? 'show' : ''}`}
      >
        <GridContainer
          component="main"
          flexDirection="column"
          sx={{ flexGrow: 1 }}
        >
          <LayoutTitle
            title={title}
            subheader={subheader}
            airport={airport}
          />
          {children}
        </GridContainer>
        <Copyright sx={{ overflow: 'auto' }} />
        {isXsBreakpoint && <Offset />}
      </Container>
      <ContactSpeedDial />
    </>
  );
}

export default Layout;
