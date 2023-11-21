import FilterAltOutlined from '@mui/icons-material/FilterAltOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import React, { useLayoutEffect } from 'react';
import { useTour } from '../../../../../layouts/ToursLayout/hooks/useTour';

const filterButtonStyles = {
  width: '40%',
  minWidth: 100,
  display: { sm: 'none' },
};

export default React.memo(function FilterButtonMobile() {
  const [{ expandMobileFilter }, { toggleExpandMobileFilter }] = useTour();

  const isXsBreakpoint = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useLayoutEffect(() => {
    if (isXsBreakpoint === false) {
      toggleExpandMobileFilter(false);
    }
  }, [isXsBreakpoint, toggleExpandMobileFilter]);

  return (
    <Button
      variant="outlined"
      endIcon={<FilterAltOutlined />}
      size="large"
      sx={filterButtonStyles}
      onClick={toggleExpandMobileFilter}
      aria-expanded={expandMobileFilter}
      aria-label="Show tour filters"
    >
      Filter
    </Button>
  );
});
