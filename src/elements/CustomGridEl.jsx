import Grid from '@mui/material/Grid';

export const GridContainer = ({ children, sx, ...other }) => {
  return (
    <Grid
      container
      sx={{ ...sx }}
      {...other}
    >
      {children}
    </Grid>
  );
};

export const GridItem = ({ children, sx, ...other }) => {
  return (
    <Grid
      item
      {...other}
      sx={{ ...sx }}
    >
      {children}
    </Grid>
  );
};
