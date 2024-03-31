import SortOutlined from '@mui/icons-material/SortOutlined';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useCallback } from 'react';
import { useTour } from '../../../../../layouts/ToursLayout/hooks/useTour';

const formControlStyles = {
  width: { xxs: '40%', sm: '28%' },
  minWidth: 120,
  maxWidth: 225,
};

const inputLabelStyles = {
  width: '45%',
  display: 'flex',
  alignItems: 'center',
};

const sortOutlinedStyles = { ml: 0.5 };

export default React.memo(function SortButton() {
  const [{ sortBy }, { setSort }] = useTour();

  const handleSortChange = useCallback(
    (e) => {
      setSort(e.target.value);
    },
    [setSort],
  );

  const handleClearSelect = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        setSort('');
      }
    },
    [setSort],
  );

  return (
    <FormControl
      onKeyUp={handleClearSelect}
      sx={formControlStyles}
      size={'small'}
    >
      <InputLabel sx={inputLabelStyles}>
        Sort
        <SortOutlined sx={sortOutlinedStyles} />
      </InputLabel>
      <Select
        label="Sort......."
        value={sortBy}
        onChange={handleSortChange}
      >
        <MenuItem value="alphabetical"> Alphabetical</MenuItem>
        <MenuItem value="priceAscending">Price: Low to High</MenuItem>
        <MenuItem value="priceDescending">Price: High to Low</MenuItem>
        <MenuItem value="region">Region: Alphabetical</MenuItem>
      </Select>
    </FormControl>
  );
});
