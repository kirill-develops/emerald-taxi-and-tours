import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import React from 'react';
import FilterListGroup from './FilterListGroup';
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

const StyledList = styled(List)(({ theme }) =>
  theme.unstable_sx({
    m: { xxs: 2, sm: 0 },
    py: 0,

    color: theme.palette.secondary.containerText,
  }),
);

const StyledListSubheader = styled(ListSubheader)(({ theme }) =>
  theme.unstable_sx({
    color: theme.palette.secondary.containerText,
    border: `0.5px solid ${theme.palette.divider}`,
    typography: 'filterTitle',
    borderRadius: 1.5,
    mb: '1.12rem',
  }),
);

export default React.memo(function FilterOptions({ sx, ...rest }) {
  checkUnrecognizedProps('FilterOptions', rest);
  const isLessXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <StyledList sx={sx}>
      {isLessXs ? '' : <StyledListSubheader>Filters</StyledListSubheader>}
      {filterTypes.map(({ filterState, optionKey, headerString }) => (
        <FilterListGroup
          filterState={filterState}
          optionKey={optionKey}
          headerString={headerString}
          key={optionKey}
        />
      ))}
    </StyledList>
  );
});
