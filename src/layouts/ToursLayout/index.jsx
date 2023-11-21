import Container from '@mui/material/Container';
import React from 'react';
import useStickyElement from './hooks/useStickyElement';
import { layoutGridSpacingProp } from '@elements/CustomGridEl';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import PageLayoutStack from '@elements/PageLayoutStack';
import FilterOptions from '../../components/FilterOptions';
import TourGrid from '../../components/TourGrid';
import ToursByType from '../../components/ToursByType/';
import FeaturedToursByStartLocation from '../../components/FeaturedToursByStartLocation';
import FeaturedTransfers from '../../components/FeaturedTransfers';

const gridItemStyles = {
  display: { xxs: 'none', sm: 'block' },
};

const getStickyFilterOptionsStyles = (elWidth, elTop) => ({
  position: 'fixed',
  top: elTop,
  zIndex: 100,
  width: elWidth,
});

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
  const { elRef, containerRef, isSticky, elTop } = useStickyElement();
  const offsetWidth = elRef?.current?.offsetWidth;

  const stickyOptionStyles = getStickyFilterOptionsStyles(offsetWidth, elTop);

  return (
    <PageLayoutStack>
      <ToursByType />
      <FeaturedToursByStartLocation title="Wander Further: Tours from Your Doorstep" />
      <Container>
        <GridContainer
          spacing={layoutGridSpacingProp}
          ref={containerRef}
        >
          <Aside>
            <FilterOptions
              forwardedRef={elRef}
              sx={{ opacity: isSticky ? 0 : 1 }}
            />
            {isSticky && <FilterOptions sx={stickyOptionStyles} />}
          </Aside>
          <Content>
            <TourGrid />
          </Content>
        </GridContainer>
      </Container>
      <FeaturedTransfers title="Need a Lift? Between Resorts or Airports, we got you Covered" />
    </PageLayoutStack>
  );
});
