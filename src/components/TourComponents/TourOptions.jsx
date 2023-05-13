import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import React from 'react';
import { useTour } from '@state/useTour';
import FilterButton from './FilterButtonMobile';
import FilterOptions from './FilterOptions';
import SortButton from './SortButton';

function TourOptions() {
  const [state, setState] = useTour();
  const { filterExpand } = state;

  return (
    <Container
      disableGutters
      maxWidth="xl"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'space-between', sm: 'flex-end' },
          m: 1,
        }}
      >
        <FilterButton />
        <SortButton />
      </Box>
      <Collapse
        in={filterExpand}
        sx={{ display: { sm: 'none' } }}
        timeout="auto"
        unmountOnExit
      >
        <FilterOptions />
      </Collapse>
    </Container>
  );
}

export default TourOptions;
