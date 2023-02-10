import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import Copyright from './Copyright';
import Navbar from './Navbar';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  const theme = useTheme();
  const isXsBreakpoint = useMediaQuery(theme.breakpoints.only('xs'));

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          height: { sm: '91vh' },
          minHeight: { sm: '100%' },
          overflow: { sm: 'auto' },
        }}
      >
        {children}
        <Copyright sx={{ overflow: 'auto' }} />
        {isXsBreakpoint && <Offset />}
      </Container>
    </>
  );
}

export default Layout;
