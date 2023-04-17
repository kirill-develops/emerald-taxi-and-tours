import { Search } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import SearchModal from './SearchModal';

function SearchAdornment() {
  return (
    <InputAdornment position="end">
      <Search />
    </InputAdornment>
  );
}

function TabletSearchModal({ dissapearingBreakpoint }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: 'flex-end',
        display: { xs: 'none', [dissapearingBreakpoint]: 'flex' },
      }}
    >
      <TextField
        hiddenLabel
        defaultValue="Search"
        focused={false}
        onClick={handleOpen}
        size="small"
        variant="outlined"
        InputProps={{
          readOnly: true,
          endAdornment: <SearchAdornment />,
        }}
        sx={{
          '& .MuiInputBase-root': {
            cursor: 'pointer',
            '& input': { cursor: 'pointer' },
          },
        }}
      />
      <SearchModal
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
}

export default TabletSearchModal;
