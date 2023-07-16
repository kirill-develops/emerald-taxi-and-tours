import { Search } from '@mui/icons-material';
import { Chip, InputAdornment, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import SearchModal from './NavSearch/SearchModal';

function SearchStartAdornment() {
  return (
    <InputAdornment position="start">
      <Search />
    </InputAdornment>
  );
}

function SearchEndAdornment() {
  return (
    <InputAdornment position="end">
      <Chip
        label="⌘K"
        variant="outlined"
        size="small"
        sx={{
          borderRadius: 2,
          color: (theme) => theme.palette.text.secondary,
        }}
      />
    </InputAdornment>
  );
}

function TabletSearchButton({ dissapearingBreakpoint }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.up(dissapearingBreakpoint),
  );

  if (!isTablet) {
    return null;
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        flexBasis: '20%',
        justifyContent: 'flex-end',
        display: { xxs: 'none', [dissapearingBreakpoint]: 'flex' },
      }}
    >
      <TextField
        hiddenLabel
        placeholder="Search"
        focused={false}
        onClick={handleOpen}
        size="small"
        variant="outlined"
        InputProps={{
          readOnly: true,
          startAdornment: <SearchStartAdornment />,
          endAdornment: <SearchEndAdornment />,
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
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </Box>
  );
}

export default TabletSearchButton;
