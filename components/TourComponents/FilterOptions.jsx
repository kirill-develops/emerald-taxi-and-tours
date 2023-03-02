import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import React from 'react';
import FilterCheckboxGroup from './FilterCheckboxGroup';

function FilterOptions() {
  return (
    <Card
      variant="outlined"
      sx={{
        m: { xs: 2, sm: 0 },
        ml: { sm: 1 },
        p: 1,
      }}
    >
      <Typography>Starting Location</Typography>
      <FilterCheckboxGroup
        filterState="filterStartLocation"
        dataFilter="price"
      />
      <Typography>Attraction Type</Typography>
      <FilterCheckboxGroup
        filterState="filterType"
        dataFilter="type"
      />
      <Typography>Attraction Region</Typography>
      <FilterCheckboxGroup
        filterState="filterArea"
        dataFilter="area"
      />
      <Typography>Price Range</Typography>
    </Card>
  );
}

export default FilterOptions;
