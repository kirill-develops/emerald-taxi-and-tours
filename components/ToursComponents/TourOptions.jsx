import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTour } from '../../state/useSort';
import Filter from './FilterButtonMobile';
import FilterOptions from './FilterOptions';
import SortButton from './SortButton';

function TourOptions() {
  const [state, setState] = useTour();
  const { filterExpand } = state;

  return (
    <Container disableGutters>
      <Typography>TOURS & ATTRACTIONS</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'space-between', sm: 'flex-end' },
          m: 1,
        }}
      >
        <Filter />
        <SortButton />
      </Box>
      <Collapse
        in={filterExpand}
        timeout="auto"
        unmountOnExit
      >
        <FilterOptions />
      </Collapse>
    </Container>
  );
}

export default TourOptions;
