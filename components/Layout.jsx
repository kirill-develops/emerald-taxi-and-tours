import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import Copyright from './Copyright';
import Navbar from '@components/NavbarComponents/NavbarLayout';
import usePageTransition from '@hooks/usePageTransition';

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
          overflow: { sm: 'auto' },
        }}
        className={`component-fade ${showComponent ? 'show' : ''}`}
      >
        <main>
          <Title
            title={title}
            subheader={subheader}
          />
          {children}
        </main>
        {isXsBreakpoint && <Offset />}
        <Copyright sx={{ overflow: 'auto' }} />
      </Container>
    </>
  );
}

export default Layout;
