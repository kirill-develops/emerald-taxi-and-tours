import dynamic from 'next/dynamic';

const Container = dynamic(() => import('@mui/material/Container'));
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import React from 'react';
import usePageTransition from './hooks/usePageTransition';
const ContactSpeedDial = dynamic(() => import('../ContactSpeedDial'));
const LayoutTitle = dynamic(() => import('@elements/LayoutTitle'));
const Copyright = dynamic(() => import('../Copyright'));
const Navbar = dynamic(() => import('@components/NavbarLayout/'));
const GridContainer = dynamic(() =>
  import('@elements/CustomGridEl').then((mod) => mod.GridContainer),
);

const LayoutContainer = styled(Container)(({ theme }) =>
  theme.unstable_sx({
    minHeight: { sm: '100%' },
    overflow: { sm: 'auto' },
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  }),
);

const LayoutGrid = styled(GridContainer)(({ theme }) =>
  theme.unstable_sx({
    flexGrow: 1,
    flexDirection: 'column',
  }),
);

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function PageLayout({
  children,
  title = '',
  subheader = '',
  airport = '',
}) {
  const showComponent = usePageTransition();

  const isXsBreakpoint = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Navbar />
      {!isXsBreakpoint && <Offset />}
      <LayoutContainer
        component="main"
        maxWidth="false"
        className={`component-fade ${showComponent ? 'show' : ''}`}
        disableGutters
      >
        <LayoutGrid>
          <LayoutTitle
            title={title}
            subheader={subheader}
            airport={airport}
          />
          {children}
        </LayoutGrid>
        <Copyright />
        {isXsBreakpoint && <Offset />}
      </LayoutContainer>
      <ContactSpeedDial />
    </>
  );
}
