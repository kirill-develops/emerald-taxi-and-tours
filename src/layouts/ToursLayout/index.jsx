import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import React from 'react';
import { layoutGridSpacingProp } from '@elements/CustomGridEl';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import PageLayoutStack from '@elements/PageLayoutStack';
import FilterOptions from '../../components/FilterOptions';
import TourGrid from '../../components/TourGrid';
import ToursByType from '../../components/ToursByType/';
import FeaturedToursByStartLocation from '../../components/FeaturedToursByStartLocation';
import FeaturedTransfers from '../../components/FeaturedTransfers';

const customFilterOptionsStyles = {
  position: 'sticky',
  alignSelf: 'flex-start',
  top: '5.5rem',
  width: '100%',
};

const StyledGridContainer = styled((props) => (
  <GridContainer
    spacing={layoutGridSpacingProp}
    {...props}
  />
))(({ theme }) => theme.unstable_sx({ height: '100%' }));

const Aside = styled((props) => (
  <GridItem
    sm={4}
    md={3}
    lg={2.5}
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    display: { xxs: 'none', sm: 'flex' },
    height: 'auto',
    flexDirection: 'column',
  }),
);

const SpaceFiller = styled('div')(({ theme }) =>
  theme.unstable_sx({ height: 'auto' }),
);

const Content = styled((props) => (
  <GridItem
    sm={8}
    md={9}
    lg={9.5}
    {...props}
  />
))({});

export default React.memo(function TourLayout() {
  return (
    <PageLayoutStack>
      <ToursByType />
      <FeaturedToursByStartLocation
        title="Wander Further: Tours from Your Doorstep"
        titleHighlight="Tours"
      />
      <Container>
        <StyledGridContainer>
          <Aside>
            <FilterOptions sx={customFilterOptionsStyles} />
            <SpaceFiller />
          </Aside>
          <Content>
            <TourGrid />
          </Content>
        </StyledGridContainer>
      </Container>
      <FeaturedTransfers
        title="Need a Lift? Between Resorts or Airports, we got you Covered"
        titleHighlight="Need a Lift?"
      />
    </PageLayoutStack>
  );
});
