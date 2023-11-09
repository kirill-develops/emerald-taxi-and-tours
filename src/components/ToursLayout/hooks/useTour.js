import { createStore, createHook, createContainer } from 'react-sweet-state';
import { tourData } from '@data/controllers/tour';
import initAllFilterValues from './functions/initFilterValues';
import filterData from './functions/filterData';

const { initFilterStartLocation, initFilterType, initFilterArea } = initAllFilterValues();

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
            item.starting_points?.some((start) => start.link === filter.link),
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