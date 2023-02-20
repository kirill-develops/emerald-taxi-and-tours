import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import Copyright from './Copyright';
import Navbar from './Navbar';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Title({ title, subheader }) {
  const subheaderEl = subheader.length > 0 && (
    <Typography
      variant="h4"
      component="h2"
      color="secondary.light"
      sx={{ mb: '0.25em' }}
    >
      {subheader}
    </Typography>
  );

  if (title.length > 0)
    return (
      <>
        <Typography
          variant="h2"
          component="h1"
          color="primary.light"
          sx={{
            mt: '0.35em',
            fontWeight: 400,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>
        {subheaderEl}
        <Divider
          variant="inset"
          sx={{
            mb: '2.35em',
            borderColor: (theme) => theme.palette.secondary.dark,
          }}
        />
      </>
    );
}

function Layout({ children, title = '', subheader = '' }) {
  const [isMounted, setIsMounted] = useState(false);

  const theme = useTheme();
  const isXsBreakpoint = useMediaQuery(theme.breakpoints.only('xs'));

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <>
      <Navbar />
      {!isXsBreakpoint && <Offset />}
      <Container
        maxWidth="xl"
        sx={{
          minHeight: { sm: '100%' },
          overflow: { sm: 'auto' },
        }}
      >
        <Title
          title={title}
          subheader={subheader}
        />
        {children}
        <Copyright sx={{ overflow: 'auto' }} />
        {isXsBreakpoint && <Offset />}
      </Container>
    </>
  );
}

export default Layout;
