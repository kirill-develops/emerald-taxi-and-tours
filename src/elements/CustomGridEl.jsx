import Grid from '@mui/material/Grid';

export const GridContainer = ({ children, sx, ...other }) => {
  const gridStyles = { width: '100%', ...sx };

  return (
    <Grid
      container
      sx={gridStyles}
      {...other}
    >
      {children}
    </Grid>
  );
};

export const GridItem = ({ children, sx, ...other }) => {
  const gridStyles = { width: '100%', ...sx };

  return (
    <Grid
      item
      sx={gridStyles}
      {...other}
    >
      {children}
    </Grid>
  );
};
