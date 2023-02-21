import Grid from '@mui/material/Grid';

export const GridContainer = (props) => {
  const { children, ...other } = props;

  return (
    <Grid
      container
      {...other}
    >
      {children}
    </Grid>
  );
};

export const GridItem = (props) => {
  const { children, ...other } = props;

  return (
    <Grid
      item
      {...other}
    >
      {children}
    </Grid>
  );
};
