import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useMemo, useState } from 'react';
import SearchModal from '../NavSearch/SearchModal';

export default React.memo(function MobileSearchButton({
  dissapearingBreakpoint,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.down(dissapearingBreakpoint),
  );

  const boxStyles = useMemo(
    () => ({
      flexGrow: 1,
      justifyContent: 'flex-end',
      display: { xxs: 'flex', [dissapearingBreakpoint]: 'none' },
    }),
    [],
  );

  if (!isMobile) {
    return null;
  }

  return (
    <Box sx={boxStyles}>
      <IconButton
        size="large"
        aria-label="search tours & taxi fares"
        aria-controls="menu-searchbar"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <Search />
      </IconButton>
      <SearchModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </Box>
  );
});
