import SortOutlined from '@mui/icons-material/SortOutlined';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import { useTour } from '../../state/useTour';

function SortButton() {
  const [state, actions] = useTour();
  const { sort } = state;
  const { setSort } = actions;

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleClearSelect = (e) => {
    if (e.keyCode === 27) {
      setSort('');
    }
  };

  return (
    <FormControl
      onKeyUp={handleClearSelect}
      sx={{
        width: { xs: '40%', sm: '25%' },
        minWidth: 125,
        maxWidth: 225,
      }}
      size={'small'}
    >
      <InputLabel
        sx={{
          width: '45%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Sort
        <SortOutlined sx={{ ml: 1 }} />
      </InputLabel>
      <Select
        label="Sort......."
        value={sort}
        onChange={handleSortChange}
        sx={{ backgroundColor: 'white' }}
      >
        <MenuItem value="alphabetical"> Alphabetical</MenuItem>
        <MenuItem value="priceAscending">Price: Low to High</MenuItem>
        <MenuItem value="priceDescending">Price: High to Low</MenuItem>
        <MenuItem value="region">Region: Alphabetical</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortButton;
