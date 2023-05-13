import Grid from '@mui/material/Grid';

export const GridContainer = ({ children, sx, ...other }) => {
  return (
    <Grid
      container
      {...other}
      sx={{ ...sx }}
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
