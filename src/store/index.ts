import {configureStore} from '@reduxjs/toolkit';
import appReducers from './app';

const store = configureStore({
  reducer: {
    app: appReducers,
  },
});

export default store;
