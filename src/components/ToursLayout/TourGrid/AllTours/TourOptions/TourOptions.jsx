import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import React from 'react';
import MobileFilterButton from './Elements/FilterButtonMobile';
import FilterOptions from '../../../FilterOptions/FilterOptions';
import SortButton from './Elements/SortButton';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import { useTour } from '../../../hooks/useTour';
import FilterChips from '../../../FilterChips/FilterChips';

const stackStyles = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: { xxs: 'space-between', sm: 'flex-end' },
  m: { sm: 1 },
};

const collapseStyles = { display: { sm: 'none' } };

export default React.memo(function TourOptions({ sx, ...rest }) {
  const [{ expandMobileFilter }] = useTour();

  return (
    <MaxWidthContainer
      disableGutters
      disableStack
      sx={sx}
      {...rest}
    >
      <Stack sx={stackStyles}>
        <MobileFilterButton />
        <SortButton />
      </Stack>
      <FilterChips />
      <Collapse
        in={expandMobileFilter}
        sx={collapseStyles}
        timeout="auto"
        unmountOnExit
      >
        <FilterOptions />
      </Collapse>
    </MaxWidthContainer>
  );
});
