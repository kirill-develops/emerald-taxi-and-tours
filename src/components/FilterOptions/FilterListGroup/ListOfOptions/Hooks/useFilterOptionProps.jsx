import { useTour } from '../../../../../layouts/ToursLayout/hooks/useTour';
import { extractProps } from '@data/controllers/tour';

export default function useFilterOptionProps(optionKey) {
  const [state, { toggleCheckbox, findAvailableFilters }] = useTour();

  const filterOptions = extractProps(optionKey);
  const availableFilters = findAvailableFilters(filterOptions);

  return { state, toggleCheckbox, filterOptions, availableFilters };
}
