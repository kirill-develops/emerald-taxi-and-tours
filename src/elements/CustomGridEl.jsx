import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

export const layoutGridSpacingProp = {
  xxs: 1,
  xs: 1.5,
  sm: 2,
  md: 3,
  lg: 4.5,
};

const StyledContainer = styled(Grid)(({ theme }) =>
  theme.unstable_sx({ alignItems: 'stretch' }),
);

export const GridContainer = React.forwardRef(function GridContainer(
  { children, ...other },
  ref,
) {
  return (
    <StyledContainer
      ref={ref}
      container
      {...other}
    >
      {children}
    </StyledContainer>
  );
});

export const GridItem = styled((props) => (
  <Grid
    xxs={12}
    {...props}
  />
))(({ theme }) => theme.unstable_sx({}));
