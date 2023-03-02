import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import Copyright from './Copyright';
import Navbar from '@Navbar/NavbarLayout';
import usePageTransition from '@hooks/usePageTransition';
import { GridContainer } from '@elements/CustomGridEl';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Title({ title, subheader, airport }) {
  const subheaderColor =
    airport.length > 0 ? 'text.primary' : 'secondary.light';
  const subheaderEl = subheader.length > 0 && (
    <Typography
      variant="h4"
      component="h2"
      color={subheaderColor}
      sx={{ mb: '0.25em' }}
    >
      {subheader}
    </Typography>
  );

  const airportEl = airport.length > 0 && (
    <Typography
      variant="h5"
      component="h3"
      color="secondary.light"
      sx={{ mb: '0.25em' }}
    >
      {airport}
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
        {airportEl}
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
          overflow: { sm: 'auto' },
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
          <Title
            title={title}
            subheader={subheader}
            airport={airport}
          />
          {children}
        </GridContainer>
        <Copyright sx={{ overflow: 'auto' }} />
        {isXsBreakpoint && <Offset />}
      </Container>
    </>
  );
}

export default Layout;
