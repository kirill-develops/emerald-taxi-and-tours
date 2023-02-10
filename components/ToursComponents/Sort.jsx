import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';

function Sort() {
  const [sort, setSort] = useState('');

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
      sx={{ m: 1, width: { xs: '50%', sm: '25%' } }}
      size={'small'}
    >
      <InputLabel>Sort</InputLabel>
      <Select
        label="Sort"
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

export default Sort;
