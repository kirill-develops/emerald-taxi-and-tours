import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import React from 'react';
import FilterListGroup from './FilterListGroup/FilterListGroup';
import { checkUnrecognizedProps } from '../../helperFunctions';

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

const StyledCard = styled(
  React.forwardRef(function StyledCard(props, ref) {
    return (
      <Card
        elevation={1}
        ref={ref}
        {...props}
      />
    );
  }),
)(({ theme }) =>
  theme.unstable_sx({
    m: { xxs: 2, sm: 0 },
    p: 1,
    backgroundColor: theme.palette.secondary.container,
    color: theme.palette.secondary.containerText,
  }),
);

const StyledListSubheader = styled(ListSubheader)(({ theme }) =>
  theme.unstable_sx({
    color: theme.palette.secondary.containerText,
    backgroundColor: 'inherit',
  }),
);

export default React.memo(function FilterOptions({
  forwardedRef,
  sx,
  ...rest
}) {
  checkUnrecognizedProps('FilterOptions', rest);

  return (
    <StyledCard
      ref={forwardedRef}
      sx={sx}
    >
      <List>
        <StyledListSubheader>Filters</StyledListSubheader>
        {filterTypes.map(({ filterState, optionKey, headerString }) => (
          <FilterListGroup
            filterState={filterState}
            optionKey={optionKey}
            headerString={headerString}
            key={optionKey}
          />
        ))}
      </List>
    </StyledCard>
  );
});
