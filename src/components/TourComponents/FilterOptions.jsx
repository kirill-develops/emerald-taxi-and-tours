import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import React from 'react';
import FilterCheckboxGroup from './FilterCheckboxGroup';

const cardStyles = {
  m: { xs: 2, sm: 0 },
  ml: { sm: 1 },
  p: 1,
  position: { xs: 'static', sm: 'sticky' },
  top: { sm: 80 },
};

function FilterOptions() {
  return (
    <Card
      variant="outlined"
      sx={cardStyles}
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

export default React.memo(FilterOptions);
