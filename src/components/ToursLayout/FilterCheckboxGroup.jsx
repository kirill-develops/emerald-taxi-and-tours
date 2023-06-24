import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React, { useCallback } from 'react';
import { extractProps, useTour } from '@state/useTour';

const checkboxStyles = { py: 0.5 };

const checkboxInputProps = (label) => ({ 'aria-label': label });

function FilterCheckboxGroup({ filterState, dataFilter }) {
  const [state, actions] = useTour();
  const { toggleCheckbox, findAvailableFilters } = actions;

  const filterOptions = extractProps(dataFilter);
  const filterAvailable = findAvailableFilters(filterOptions);

  const handleClick = useCallback(
    ({ target: { value } }) => toggleCheckbox(filterState, value),
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
                color="primary"
                sx={checkboxStyles}
                inputProps={checkboxInputProps(label)}
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

export default React.memo(FilterCheckboxGroup);
