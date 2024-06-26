import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext } from 'react';
import { GridContainer } from '@elements/CustomGridEl';
import TourAreaContext from '@context/TourAreaContext';
import { layoutGridSpacingProp } from '@elements/CustomGridEl';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import ItemCard from '../../components/ItemCard';
import PageLayoutStack from '@elements/PageLayoutStack';
import FeaturedToursByStartLocation from '../../components/FeaturedToursByStartLocation';

export default function ToursByLocationLayout() {
  const { locations, name } = useContext(TourAreaContext);

  const isSmBreakpoint = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <PageLayoutStack>
      <MaxWidthContainer
        maxWidth="md"
        disableStack
      >
        <Typography sx={{ px: 2 }}>
          Begin your adventure from {name}. Browse a tour or activity below that
          interests you and experience the island in the best way possible!
        </Typography>
      </MaxWidthContainer>

      <MaxWidthContainer
        maxWidth={isSmBreakpoint ? 'sm' : 'md'}
        disableStack
      >
        <GridContainer spacing={layoutGridSpacingProp}>
          {locations.map((location) => (
            <ItemCard
              key={location.link}
              tour={location}
            />
          ))}
        </GridContainer>
      </MaxWidthContainer>
      <FeaturedToursByStartLocation title="Widen Your Journey: More Tour Kickoffs Below" />
    </PageLayoutStack>
  );
}
