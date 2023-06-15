import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import React from 'react';
import { useTour } from '@state/useTour';
import FilterButton from './FilterButtonMobile';
import FilterOptions from './FilterOptions';
import SortButton from './SortButton';

const boxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: { xs: 'space-between', sm: 'flex-end' },
  m: 1,
};

const collapseStyles = { display: { sm: 'none' } };

function TourOptions({ sx, ...rest }) {
  const [{ filterExpand }] = useTour();

  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={sx}
      {...rest}
    >
      <Box sx={boxStyles}>
        <FilterButton />
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
    </Container>
  );
}

export default React.memo(TourOptions);
