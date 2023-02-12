import { createStore, createHook, createContainer } from 'react-sweet-state';

const tourStore = createStore({
  initialState: { sort: '' },
  actions: {
    setSort: (option) => ({ setState, getState }) => {
      setState({ sort: option })
    }
  }
});

export const TourContainer = createContainer(tourStore);

export const useTour = createHook(tourStore);