import FilterAltOutlined from '@mui/icons-material/FilterAltOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import React, { useLayoutEffect } from 'react';
import { useTour } from '../../../../hooks/useTour';

const filterButtonStyles = {
  width: '40%',
  minWidth: 100,
  display: { sm: 'none' },
};

export default React.memo(function FilterButtonMobile() {
  const [{ filterExpand }, { toggleFilterExpand }] = useTour();

  const isXsBreakpoint = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useLayoutEffect(() => {
    if (isXsBreakpoint === false) {
      toggleFilterExpand(false);
    }
  }, [isXsBreakpoint, toggleFilterExpand]);

  return (
    <Button
      variant="outlined"
      endIcon={<FilterAltOutlined />}
      size="large"
      sx={filterButtonStyles}
      onClick={toggleFilterExpand}
      aria-expanded={filterExpand}
      aria-label="Show tour filters"
    >
      Filter
    </Button>
  );
});
