import { Search } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import SearchModal from './NavSearch/SearchModal';
import { useMediaQuery } from '@mui/material';

function MobileSearchButton({ dissapearingBreakpoint }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.down(dissapearingBreakpoint),
  );

  if (!isMobile) {
    return null;
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: 'flex-end',
        display: { xxs: 'flex', [dissapearingBreakpoint]: 'none' },
      }}
    >
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
}

export default MobileSearchButton;
