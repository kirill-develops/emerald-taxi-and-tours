import React from 'react';
import { useTour } from '../hooks/useTour';
import { extractProps } from '@data/controllers/tour';
import SelectedChips from './Elements/SelectedChips';

const filterObjArr = [
  { filterState: 'filterStartLocation', optionKey: 'starting_points' },
  { filterState: 'filterType', optionKey: 'type' },
  { filterState: 'filterArea', optionKey: 'area' },
];

const getLink = (item) => (typeof item?.link === 'string' ? item.link : item);

export default function FilterChips() {
  const [state, actions] = useTour();
  const { toggleCheckbox } = actions;

  const createFilterItem = ({ filterState, item }) => ({
    name: item?.name ?? item,
    handleCheckboxToggle: () => toggleCheckbox(filterState, getLink(item)),
  });

  const filterKeys = filterObjArr.flatMap(({ filterState, optionKey }) =>
    extractProps(optionKey)
      .filter((item) => state[filterState][getLink(item)])
      .map((item) => createFilterItem({ filterState, item })),
  );

  return (
    <SelectedChips
      typeArr={filterKeys}
      sx={{ px: 2, pt: 2 }}
    />
  );
}
