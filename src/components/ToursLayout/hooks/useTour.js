import { createStore, createHook, createContainer } from 'react-sweet-state';
import tourData from '@data/tourData.json';

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


export function extractProps(key, data = tourData) {
  const uniqueNames = new Set();
  const result = [];

  for (const obj of data) {
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

const filterData = () => ({ setState, getState }) => {
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
}

const initFilterStartLocation = initFilter(tourData, 'price');
const initFilterType = initFilter(tourData, 'type');
const initFilterArea = initFilter(tourData, 'area');

export const TourContainer = createContainer();


export const tourStore = createStore({
  name: 'tour Store',
  containedBy: TourContainer,
  initialState: {
    sortBy: '',
    filterExpand: false,
    filterStartLocation: initFilterStartLocation,
    filterType: initFilterType,
    filterArea: initFilterArea,
    filteredData: tourData,
    tourData: tourData
  },
  actions: {
    setSort:
      (option) => ({ setState }) => {
        setState({ sortBy: option })
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
      (stateName, value) => ({ setState, getState }) => {
        const state = getState()[stateName];

        setState({
          [stateName]: {
            ...state,
            [value]: !state[value]
          }
        });

        filterData()({ setState, getState })
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

export const useTour = createHook(tourStore);