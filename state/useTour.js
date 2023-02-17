import { createStore, createHook, createContainer } from 'react-sweet-state';
import { tourData } from '../data/tours';

function initFilter(data, key) {
  let result = {};
  let uniqueNames = new Map();

  data.forEach((obj) => {
    let names = Array.isArray(obj[key]) ? obj[key] : [obj[key]];
    names.forEach((name) => {
      if (!uniqueNames.has(key === 'price' ? name.link : name)) {
        result[key === 'price' ? name.link : name] = false;
        uniqueNames.set(key === 'price' ? name.link : name, true);
      }
    });
  });

  return result;
};


export function extractProps(data, key) {
  const uniqueNames = new Set();

  const result = data.flatMap(obj =>
    Array.isArray(obj[key]) ? obj[key] : [obj[key]])
    .filter(name => {
      const isUnique = !uniqueNames.has(key === 'price' ? name.link : name);

      if (isUnique) uniqueNames.add(key === 'price' ? name.link : name);

      return isUnique;
    });

  if (key === 'price') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    result.sort();
  }

  return key === 'price' ? result.map(({ name, link }) => ({ name, link })) : result;
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
    handleFilterExpandClick:
      (boolean) => ({ setState, getState }) => {
        const isBoolean = typeof boolean === 'boolean';

        setState({
          filterExpand: isBoolean ?
            boolean : !getState().filterExpand
        })
      },
    handleStartLocationCheckbox:
      ({ target }) => ({ setState, getState, dispatch }) => {
        const { filterStartLocation: startingLocation } = getState();
        const { value } = target;

        setState({
          filterStartLocation: {
            ...startingLocation,
            [value]: !startingLocation[value]
          }
        });

        dispatch(tourStore.actions.handleFilterData());
      },
    handleTypeCheckbox:
      ({ target }) => ({ setState, getState, dispatch }) => {
        const { filterType } = getState();
        const { value } = target;

        setState({
          filterType: {
            ...filterType,
            [value]: !filterType[value]
          }
        });

        dispatch(tourStore.actions.handleFilterData());
      },
    handleAreaCheckbox:
      ({ target }) => ({ setState, getState, dispatch }) => {
        const { filterArea } = getState();
        const { value } = target;

        setState({
          filterArea: {
            ...filterArea,
            [value]: !filterArea[value]
          }
        });

        dispatch(tourStore.actions.handleFilterData());
      },
    handleFilterData: () => ({ setState, getState }) => {
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

      return filters.reduce((acc, filter) => {
        if (typeof filter === 'object') {
          const match = filteredData.find((item) =>
            item.price?.some((price) => price.link === filter.link),
          );

          acc[filter.link] = Boolean(match);
        }

        if (typeof filter === 'string') {
          const match = filteredData.find((item) =>
            item.area === filter ||
            item.type?.some(type => type === filter))

          acc[filter] = Boolean(match);
        }
        return acc;
      }, {});
    }
  }
});

export const TourContainer = createContainer(tourStore);

export const useTour = createHook(tourStore);