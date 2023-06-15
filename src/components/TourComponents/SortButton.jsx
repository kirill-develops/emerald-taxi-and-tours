import SortOutlined from '@mui/icons-material/SortOutlined';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useMemo } from 'react';
import { useTour } from '@state/useTour';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

function SortTooltip({ title = '', children, sx, disabled = false, ...rest }) {
  return (
    <Tooltip
      title={title}
      arrow
      followCursor
      TransitionComponent={Zoom}
      placement="left"
      disableFocusListener={disabled}
      disableHoverListener={disabled}
      disableInteractive={disabled}
      disableTouchListener={disabled}
      sx={{ ...sx }}
      {...rest}
    >
      <span>{children}</span>
    </Tooltip>
  );
}

function SortButton() {
  const [state, actions] = useTour();
  const { sort, filterStartLocation } = state;
  const { setSort } = actions;

  const hasStartLocation = useMemo(
    () => Object.values(filterStartLocation).some((value) => value),
    [filterStartLocation],
  );

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
        width: { xxs: '40%', sm: '28%' },
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
      >
        <MenuItem value="alphabetical"> Alphabetical</MenuItem>

        <MenuItem
          value="priceAscending"
          disabled={!hasStartLocation}
        >
          <SortTooltip
            title="select starting location for price sort"
            disabled={hasStartLocation}
          >
            Price: Low to High
          </SortTooltip>
        </MenuItem>

        <MenuItem
          value="priceDescending"
          disabled={!hasStartLocation}
        >
          <SortTooltip
            title="select starting location for price sort"
            disabled={hasStartLocation}
          >
            Price: High to Low
          </SortTooltip>
        </MenuItem>
        <MenuItem value="region">Region: Alphabetical</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortButton;
