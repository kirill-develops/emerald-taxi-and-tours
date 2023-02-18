import { useTheme } from '@emotion/react';
import FilterAltOutlined from '@mui/icons-material/FilterAltOutlined';
import { useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useLayoutEffect } from 'react';
import { useTour } from '@state/useTour';

function FilterButtonMobile() {
  const [state, setState] = useTour();
  const { filterExpand } = state;
  const { handleFilterExpandClick } = setState;

  const theme = useTheme();
  const isXsBreakpoint = useMediaQuery(theme.breakpoints.only('xs'));

  useLayoutEffect(() => {
    if (isXsBreakpoint === false) {
      handleFilterExpandClick(false);
    }
  }, [isXsBreakpoint, handleFilterExpandClick]);

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
