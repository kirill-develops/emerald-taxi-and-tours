import React from 'react';
import { layoutGridSpacingProp } from '@elements/CustomGridEl';
import FilterOptions from './FilterOptions/FilterOptions';
import TourGrid from './TourGrid/TourGrid';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import PageLayoutStack from '@elements/PageLayoutStack';

const gridItemStyles = { display: { xxs: 'none', sm: 'block' } };

function Aside({ children, sx, ...rest }) {
  return (
    <GridItem
      sm={4}
      md={3}
      lg={2.5}
      sx={{ ...gridItemStyles, ...sx }}
      {...rest}
    >
      {children}
    </GridItem>
  );
}

function Content({ children, sx, ...rest }) {
  return (
    <GridItem
      xxs={12}
      sm={8}
      md={9}
      lg={9.5}
      sx={sx}
      {...rest}
    >
      {children}
    </GridItem>
  );
}

export default React.memo(function TourLayout() {
  return (
    <PageLayoutStack>
      <GridContainer spacing={layoutGridSpacingProp}>
        <Aside>
          <FilterOptions />
        </Aside>
        <Content>
          <TourGrid />
        </Content>
      </GridContainer>
    </PageLayoutStack>
  );
});
