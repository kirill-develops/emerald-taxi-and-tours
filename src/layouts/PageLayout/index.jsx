import dynamic from 'next/dynamic';

import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
const Container = dynamic(() => import('@mui/material/Container'));
const Stack = dynamic(() => import('@mui/material/Stack'));
import React from 'react';
import usePageTransition from './hooks/usePageTransition';
const Navbar = dynamic(() => import('@components/Navbar/'));
const RateUsButton = dynamic(() => import('../../components/RateUsButton/'));
const ContactSpeedDial = dynamic(() =>
  import('../../components/ContactSpeedDial'),
);
const LayoutTitle = dynamic(() => import('./Elements/LayoutTitle'));
const FooterLayout = dynamic(() => import('../../components/Footer'));
import HeroBanner from '@components/HeroBanner/HeroBanner';

const LayoutContainer = styled(Container)(({ theme }) =>
  theme.unstable_sx({
    minHeight: { sm: '100%' },
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  }),
);

const LayoutGrid = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    flexGrow: 1,
    flexDirection: 'column',
    height: '100%',
  }),
);

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function PageLayout({
  children,
  title = '',
  subheader = '',
  airport = '',
  heroBanner = false,
}) {
  const showComponent = usePageTransition();

  const isXsBreakpoint = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Navbar />
      {!isXsBreakpoint && <Offset id="top" />}
      <LayoutContainer
        maxWidth="false"
        className={`component-fade ${showComponent ? 'show' : ''}`}
        disableGutters
        id={isXsBreakpoint ? 'top' : undefined}
      >
        <LayoutGrid component="main">
          {heroBanner && <HeroBanner />}
          <LayoutTitle
            title={title}
            subheader={subheader}
            airport={airport}
          />
          {children}
        </LayoutGrid>
        <RateUsButton />
        <FooterLayout />
        {isXsBreakpoint && <Offset />}
      </LayoutContainer>
      <ContactSpeedDial />
    </>
  );
}
