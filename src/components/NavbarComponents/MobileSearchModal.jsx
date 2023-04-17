import { Search } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import SearchModal from './SearchModal';

function MobileSearchModal({ dissapearingBreakpoint }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: 'flex-end',
        display: { xs: 'flex', [dissapearingBreakpoint]: 'none' },
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
        handleClose={handleClose}
      />
    </Box>
  );
}

export default MobileSearchModal;
