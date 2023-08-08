import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useMemo, useState } from 'react';
import SearchModal from '../../NavSearch/SearchModal';
import {
  SearchEndAdornment,
  SearchStartAdornment,
} from './Elements/SearchAdornments';

const textFieldStyles = {
  '& .MuiInputBase-root': {
    borderRadius: 3.5,
    backgroundColor: (theme) => theme.palette.background.paper,
    cursor: 'pointer',
    '& input': { cursor: 'pointer', py: 0.8125 },
  },
};

export default React.memo(function TabletSearchButton({
  dissapearingBreakpoint,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.up(dissapearingBreakpoint),
  );

  const boxStyles = useMemo(
    () => ({
      flexGrow: 1,
      flexBasis: '20%',
      justifyContent: 'flex-end',
      display: { xxs: 'none', [dissapearingBreakpoint]: 'flex' },
    }),
    [dissapearingBreakpoint],
  );

  if (!isTablet) {
    return null;
  }

  return (
    <Box sx={boxStyles}>
      <TextField
        hiddenLabel
        placeholder="Search"
        focused={false}
        onClick={handleOpen}
        variant="outlined"
        InputProps={{
          readOnly: true,
          startAdornment: <SearchStartAdornment />,
          endAdornment: <SearchEndAdornment />,
        }}
        sx={textFieldStyles}
      />
      <SearchModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </Box>
  );
});
