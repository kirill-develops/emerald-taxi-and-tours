import React, { useContext } from 'react';
import { GridContainer } from '@elements/CustomGridEl';
import TourAreaContext from '@context/TourAreaContext';
import DetailedTourCard from '../ToursLayout/TourGrid/AllTours/DetailedTourCard/DetailedTourCard';
import { gridSpacingProps } from '@material/theme';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function ToursByLocationLayout() {
  const { locations, name } = useContext(TourAreaContext);

  return (
    <Stack
      sx={{ py: 3 }}
      rowGap={2}
    >
      <MaxWidthContainer
        maxWidth="sm"
        disableStack
      >
        <Typography>
          Begin your adventure from {name} Hotels. Browse a tour or activity
          below that interests you and experience the island in the best way
          possible!
        </Typography>
      </MaxWidthContainer>

      <MaxWidthContainer
        maxWidth="lg"
        disableStack
      >
        <GridContainer spacing={gridSpacingProps}>
          {locations.map((location) => (
            <DetailedTourCard
              key={location.link}
              md={6}
              tour={location}
            />
          ))}
        </GridContainer>
      </MaxWidthContainer>
    </Stack>
  );
}
