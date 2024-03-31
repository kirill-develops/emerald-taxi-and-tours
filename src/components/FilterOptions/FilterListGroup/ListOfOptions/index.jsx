import React from 'react';
import getOptionProps from './Hooks/getOptionProps';
import useFilterOptionProps from './Hooks/useFilterOptionProps';
import StyledListItem from './Elements/StyledListItem';

export default function ListOfOptions({ filterState, optionKey }) {
  const { state, toggleCheckbox, filterOptions, availableFilters } =
    useFilterOptionProps(optionKey);

  return filterOptions.map((item) => {
    const { label, ariaProp, link, handleCheckboxToggle } = getOptionProps(
      item,
      filterState,
      toggleCheckbox,
    );

    return (
      <StyledListItem key={link}>
        <StyledListItem.Button onClick={handleCheckboxToggle}>
          <StyledListItem.Icon>
            <StyledListItem.Checkbox
              inputProps={ariaProp}
              checked={state[filterState][link]}
              disabled={!availableFilters[link]}
            />
          </StyledListItem.Icon>
          <StyledListItem.Text primary={label} />
        </StyledListItem.Button>
      </StyledListItem>
    );
  });
}
