import { createStore, createHook, createContainer } from 'react-sweet-state';
import { tourData } from '@data/tours';

function initFilter(data, key) {
  return data.reduce((result, obj) => {
    const names = Array.isArray(obj[key]) ? obj[key] : [obj[key]];

    names.forEach((name) => {
      const id = key === 'price' ? name.link : name;

      if (!result[id]) {
        result[id] = false;
      }
    });

    return result;
  }, {});
};


export function extractProps(key) {
  const uniqueNames = new Set();
  const result = [];

  for (const obj of tourData) {
    const names = Array.isArray(obj[key]) ? obj[key] : [obj[key]];

    for (const name of names) {
      const keyName = key === 'price' ? name.link : name;

      if (!uniqueNames.has(keyName)) {
        uniqueNames.add(keyName);

        if (key === 'price') {
          result.push({ name: name.name, link: name.link });
        } else {
          result.push(name);
        }
      }
    }
  }

  result.sort(key === 'price' ? (a, b) => a.name.localeCompare(b.name) : undefined);

  return result;
}


const tourStore = createStore({
  name: 'tour Store',
  initialState: {
    sort: '',
    filterExpand: false,
    filterStartLocation: initFilter(tourData, 'price'),
    filterType: initFilter(tourData, 'type'),
    filterArea: initFilter(tourData, 'area'),
    filteredData: tourData,
  },
  actions: {
    setSort:
      (option) => ({ setState }) => {
        setState({ sort: option })
      },
    toggleFilterExpand:
      (boolean) => ({ setState, getState }) => {
        const isBoolean = typeof boolean === 'boolean';

        setState({
          filterExpand: isBoolean ?
            boolean : !getState().filterExpand
        })
      },
    toggleCheckbox:
      (stateName, value) => ({ setState, getState, dispatch }) => {
        const state = getState()[stateName];

        setState({
          [stateName]: {
            ...state,
            [value]: !state[value]
          }
        });

        dispatch(tourStore.actions.filterData());
      },
    filterData: () => ({ setState, getState }) => {
      const { filterStartLocation, filterType, filterArea } = getState();
      const isStartLocFiltered = Object.values(filterStartLocation).some(val => val);
      const isTypeFiltered = Object.values(filterType).some(val => val);
      const isAreaFiltered = Object.values(filterArea).some(val => val);

      const filteredData = tourData.filter(item =>
        (!isStartLocFiltered || item.price.some((p) => filterStartLocation[p.link]))
        && (!isTypeFiltered || item.type.some((t) => filterType[t]))
        && (!isAreaFiltered || filterArea[item.area])
      );

      setState({ filteredData: filteredData.length > 0 ? filteredData : tourData });
    },
    findAvailableFilters: (filters) => ({ getState }) => {
      const { filteredData } = getState();

      return filters.reduce((availableFilters, filter) => {
        if (typeof filter === 'object') {
          const match = filteredData.find((item) =>
            item.price?.some((price) => price.link === filter.link),
          );

          availableFilters[filter.link] = Boolean(match);

        } else if (typeof filter === 'string') {
          const match = filteredData.find(
            (item) =>
              item.area === filter || item.type?.includes(filter)
          );

          availableFilters[filter] = Boolean(match);
        };

        return availableFilters;
      }, {});
    }
  }
});

export const TourContainer = createContainer(tourStore);

export const useTour = createHook(tourStore);