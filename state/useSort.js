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
  initialState: {
    sort: '',
    filterExpand: false,
    filterStartLocation: initStartingLocationFilter(tourData),
    filterType: initTypeFilter(tourData),
    filterArea: initAreaFilter(tourData)
  },
  actions: {
    setSort:
      (option) => ({ setState, getState }) => {
        setState({ sort: option })
      },
    handleFilterExpandClick:
      () => ({ setState, getState }) => {
        setState({ filterExpand: !getState().filterExpand })
      },
    handleStartLocationCheckbox:
      ({ target }) => ({ setState, getState }) => {
        const { filterStartLocation: startingLocation } = getState();
        const { value } = target;

        setState({
          filterStartLocation: {
            ...startingLocation,
            [value]: !startingLocation[value]
          }
        })
      },
    handleTypeCheckbox:
      ({ target }) => ({ setState, getState }) => {
        const { filterType } = getState();
        const { value } = target;

        setState({
          filterType: {
            ...filterType,
            [value]: !filterType[value]
          }
        })
      },
    handleAreaCheckbox:
      ({ target }) => ({ setState, getState }) => {
        const { filterArea } = getState();
        const { value } = target;

        setState({
          filterArea: {
            ...filterArea,
            [value]: !filterArea[value]
          }
        })
      }
  }
});

export const TourContainer = createContainer(tourStore);

export const useTour = createHook(tourStore);