import { createStore, createHook, createContainer } from 'react-sweet-state';
import { tourData } from '../data/tours';


function initStartingLocationFilter(data) {
  let result = {};
  let uniqueNames = new Map();

  data.forEach(({ price }) => {
    price.forEach(({ link }) => {
      if (!uniqueNames.has(link)) {
        result[link] = false;
        uniqueNames.set(link, true);
      }
    });
  });

  return result;
}

function initTypeFilter(data) {
  let result = {};
  let uniqueNames = new Map();

  data.forEach(({ type }) => {
    type.forEach((name) => {
      if (!uniqueNames.has(name)) {
        result[name] = false;
        uniqueNames.set(name, true);
      }
    });
  });

  return result;
}

function initAreaFilter(data) {
  let result = {};
  let uniqueNames = new Map();

  data.forEach(({ area }) => {
    if (!uniqueNames.has(area)) {
      result[area] = false;
      uniqueNames.set(area, true);
    }
  });

  return result;
}


const tourStore = createStore({
  name: 'tour Store',
  initialState: {
    sort: '',
    filterExpand: false,
    filterStartLocation: initStartingLocationFilter(tourData),
    filterType: initTypeFilter(tourData),
    filterArea: initAreaFilter(tourData),
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