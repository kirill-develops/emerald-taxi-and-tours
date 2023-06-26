import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import React from 'react';
import { useTour } from '@state/useTour';
import MobileFilterButton from './Elements/FilterButtonMobile';
import FilterOptions from '../FilterOptions/FilterOptions';
import SortButton from './Elements/SortButton';
import MaxWidthContainer from '../../../elements/MaxWidthContainer';

const boxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: { xxs: 'space-between', sm: 'flex-end' },
  m: { sm: 1 },
};

const collapseStyles = { display: { sm: 'none' } };

export default React.memo(function TourOptions({ sx, ...rest }) {
  const [{ filterExpand }] = useTour();

  return (
    <MaxWidthContainer
      disableGutters
      sx={sx}
      {...rest}
    >
      <Box sx={boxStyles}>
        <MobileFilterButton />
        <SortButton />
      </Box>
      <Collapse
        in={filterExpand}
        sx={collapseStyles}
        timeout="auto"
        unmountOnExit
      >
        <FilterOptions />
      </Collapse>
    </MaxWidthContainer>
  );
});
