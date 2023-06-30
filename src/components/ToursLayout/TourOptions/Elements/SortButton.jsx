import SortOutlined from '@mui/icons-material/SortOutlined';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useCallback, useMemo } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { useTour } from '../../hooks/useTour';

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

const SortTooltip = React.memo(
  ({ title = '', children, sx, disabled = false, ...rest }) => {
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
  },
);
SortTooltip.displayName = 'SortTooltip';

function SortButton() {
  const [state, actions] = useTour();
  const { sort, filterStartLocation } = state;
  const { setSort } = actions;

  const hasStartLocation = useMemo(
    () => Object.values(filterStartLocation).some((value) => value),
    [filterStartLocation],
  );

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

  const priceAscendingJSX = useMemo(
    () =>
      hasStartLocation ? (
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
      ) : (
        <SortTooltip
          title="select starting location for price sort"
          disabled={hasStartLocation}
        >
          <MenuItem
            value="priceAscending"
            disabled={!hasStartLocation}
          >
            Price: Low to High
          </MenuItem>
        </SortTooltip>
      ),
    [hasStartLocation],
  );

  const priceDescendingJSX = useMemo(
    () =>
      hasStartLocation ? (
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
      ) : (
        <SortTooltip
          title="select starting location for price sort"
          disabled={hasStartLocation}
        >
          <MenuItem
            value="priceDescending"
            disabled={!hasStartLocation}
          >
            Price: High to Low
          </MenuItem>
        </SortTooltip>
      ),
    [hasStartLocation],
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
        value={sort}
        onChange={handleSortChange}
      >
        <MenuItem value="alphabetical"> Alphabetical</MenuItem>
        {priceAscendingJSX}
        {priceDescendingJSX}
        <MenuItem value="region">Region: Alphabetical</MenuItem>
      </Select>
    </FormControl>
  );
}

export default React.memo(SortButton);
