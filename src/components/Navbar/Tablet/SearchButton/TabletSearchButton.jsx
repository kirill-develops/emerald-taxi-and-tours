import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
import SearchModal from '../../NavSearch/SearchModal';
import {
  SearchEndAdornment,
  SearchStartAdornment,
} from './Elements/SearchAdornments';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { styled } from '@mui/material';

const textColor = (theme) => theme.palette.tertiary.main;

const inputProps = {
  readOnly: true,
  startAdornment: <SearchStartAdornment color={textColor} />,
  endAdornment: <SearchEndAdornment color={textColor} />,
};

const SearchTextField = styled((props) => (
  <TextField
    hiddenLabel
    placeholder="Search"
    focused={false}
    variant="outlined"
    InputProps={inputProps}
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    cursor: 'pointer',
    width: '20%',
    maxWidth: '12.5rem',
    [`& .${inputBaseClasses.root}`]: {
      borderRadius: 6,
      backgroundColor: theme.palette.background.paper,
      color: textColor,
      '& input': { cursor: 'pointer', py: 0.8125 },
      '&:hover': {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          border: `1.4px solid ${theme.palette.tertiary.main}`,
        },
      },
    },
  }),
);

export default React.memo(function TabletSearchButton({
  dissapearingBreakpoint,
}) {
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
    <>
      <SearchTextField onClick={handleOpen} />
      <SearchModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>
  );
});
