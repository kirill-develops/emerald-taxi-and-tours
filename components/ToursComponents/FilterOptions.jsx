import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import React from 'react';
import AttractionRegion from '../FilterOptionComponents/AttractionRegion';
import AttractionTypes from '../FilterOptionComponents/AttractionTypes';
import StartingLocations from '../FilterOptionComponents/StartingLocations';

function FilterOptions() {
  return (
    <Card
      sx={{
        m: { xs: 2, sm: 0 },
        ml: { sm: 1 },
        p: 1,
      }}
    >
      <Typography>Starting Location</Typography>
      <StartingLocations />
      <Typography>Attraction Type</Typography>
      <AttractionTypes />
      <Typography>Attraction Region</Typography>
      <AttractionRegion />
      <Typography>Price Range</Typography>
    </Card>
  );
}

export default FilterOptions;
