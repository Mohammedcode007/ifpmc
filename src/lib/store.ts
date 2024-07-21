import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/bookSlice';
import pathReducer from './features/pathSlice';

export const bookStore = () => {
  return configureStore({
    reducer: {
      booking: bookSlice,
      path: pathReducer,

    },
  });
};

export type AppStore = ReturnType<typeof bookStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
