import FilterAltOutlined from '@mui/icons-material/FilterAltOutlined';
import Button from '@mui/material/Button';
import React from 'react';
import { useTour } from '../../state/useSort';

function FilterButtonMobile() {
  const [state, setState] = useTour();
  const { filterExpand } = state;
  const { handleFilterExpandClick } = setState;

  return (
    <Button
      variant="outlined"
      endIcon={<FilterAltOutlined />}
      size="large"
      sx={{
        width: '40%',
        minWidth: 125,
        backgroundColor: 'white',
        display: { sm: 'none' },
      }}
      onClick={handleFilterExpandClick}
      aria-expanded={filterExpand}
      aria-label="Show tour filters"
    >
      Filter
    </Button>
  );
}

export default FilterButtonMobile;
