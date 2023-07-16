import Grid from '@mui/material/Grid';

export const layoutGridSpacingProp = { xxs: 1, xs: 1.5, sm: 2, md: 3, lg: 4.5 };

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
      xxs={12}
      sx={gridStyles}
      {...other}
    >
      {children}
    </Grid>
  );
};
