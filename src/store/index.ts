import {configureStore} from '@reduxjs/toolkit';

import {APP, MODELS} from 'constants/redux';
import appReducers from './app';
import modelReducers from './models';

const store = configureStore({
  reducer: {
    [APP]: appReducers,
    [MODELS]: modelReducers,
  },
});

export default store;
