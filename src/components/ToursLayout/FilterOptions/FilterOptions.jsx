import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import React from 'react';
import FilterListGroup from './Elements/FilterListGroup';

const cardStyles = {
  m: { xxs: 2, sm: 0 },
  ml: { sm: 1 },
  p: 1,
  position: { xxs: 'static', sm: 'sticky' },
  top: { sm: 80 },
};

export default React.memo(function FilterOptions() {
  return (
    <Card
      variant="outlined"
      sx={cardStyles}
    >
      <List>
        <ListSubheader color="primary">Filters</ListSubheader>
        <FilterListGroup
          filterState="filterStartLocation"
          optionKey="price"
          headerString="Starting Location"
        />
        <FilterListGroup
          filterState="filterType"
          optionKey="type"
          headerString="Attraction Type"
        />
        <FilterListGroup
          filterState="filterArea"
          optionKey="area"
          headerString="Attraction Region"
        />
        <ListSubheader>Price Range</ListSubheader>
      </List>
    </Card>
  );
});
