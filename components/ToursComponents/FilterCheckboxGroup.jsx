import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React, { useCallback } from 'react';
import { extractProps, useTour } from '@state/useTour';

function FilterCheckboxGroup({ filterState, dataFilter }) {
  const [state, actions] = useTour();
  const filterOptions = extractProps(dataFilter);
  const { toggleCheckbox, findAvailableFilters } = actions;
  const filterAvailable = findAvailableFilters(filterOptions);

  const handleClick = useCallback(
    ({ target }) => {
      const { value } = target;
      toggleCheckbox(filterState, value);
    },
    [toggleCheckbox, filterState],
  );

  return (
    <FormGroup>
      {filterOptions.map((item) => {
        const label = item?.name ? item.name : item;
        const link = typeof item?.link === 'string' ? item.link : item;

        return (
          <FormControlLabel
            key={link}
            label={label}
            control={
              <Checkbox
                size="small"
                color="secondary"
                sx={{ py: 0.5 }}
                inputProps={{ 'aria-label': label }}
                value={link}
                checked={state[filterState][link]}
                disabled={!filterAvailable[link]}
                onChange={handleClick}
              />
            }
          />
        );
      })}
    </FormGroup>
  );
}

export default FilterCheckboxGroup;
