import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import React from 'react';
import FilterListGroup from './Elements/FilterListGroup';

const filterTypes = [
  {
    filterState: 'filterStartLocation',
    optionKey: 'starting_points',
    headerString: 'Starting Location',
  },
  {
    filterState: 'filterType',
    optionKey: 'type',
    headerString: 'Attraction Type',
  },
  {
    filterState: 'filterArea',
    optionKey: 'area',
    headerString: 'Attraction Region',
  },
];

const cardStyles = {
  m: { xxs: 2, sm: 0 },
  ml: { sm: 1 },
  p: 1,
  position: { xxs: 'static', sm: 'sticky' },
  top: { sm: 80 },
  backgroundColor: (theme) => theme.palette.tertiary.container,
  color: (theme) => theme.palette.tertiary.containerText,
};

const listSubheaderStyles = {
  color: (theme) => theme.palette.tertiary.containerText,
  backgroundColor: 'inherit',
};

export default React.memo(function FilterOptions() {
  return (
    <Card
      variant="outlined"
      sx={cardStyles}
    >
      <List>
        <ListSubheader sx={listSubheaderStyles}>Filters</ListSubheader>
        {filterTypes.map(({ filterState, optionKey, headerString }) => (
          <FilterListGroup
            filterState={filterState}
            optionKey={optionKey}
            headerString={headerString}
            key={optionKey}
          />
        ))}
        <ListSubheader sx={listSubheaderStyles}>Price Range</ListSubheader>
      </List>
    </Card>
  );
});
