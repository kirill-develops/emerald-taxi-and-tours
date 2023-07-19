import Grid from '@mui/material/Grid';
import React, { useMemo } from 'react';

export const layoutGridSpacingProp = {
  xxs: 1,
  xs: 1.5,
  sm: 2,
  md: 3,
  lg: 4.5,
};

export const GridContainer = React.memo(function GridContainer({
  children,
  sx,
  ...other
}) {
  const gridStyles = useMemo(
    () => ({ width: '100%', alignItems: 'stretch', ...sx }),
    [sx],
  );

  return useMemo(
    () => (
      <Grid
        container
        sx={gridStyles}
        {...other}
      >
        {children}
      </Grid>
    ),
    [children, gridStyles, other],
  );
});

export const GridItem = React.memo(function GridItem({
  children,
  sx,
  ...other
}) {
  const gridStyles = useMemo(() => ({ width: '100%', ...sx }), [sx]);

  return useMemo(
    () => (
      <Grid
        item
        xxs={12}
        sx={gridStyles}
        {...other}
      >
        {children}
      </Grid>
    ),
    [children, gridStyles, other],
  );
});
