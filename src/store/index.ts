import {configureStore} from '@reduxjs/toolkit';

import {APP} from 'constants/redux';
import appReducers from './app';

const store = configureStore({
  reducer: {
    [APP]: appReducers,
  },
});

export default store;
