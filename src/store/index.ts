import {configureStore} from '@reduxjs/toolkit';
import userReducers from './user';

const store = configureStore({
  reducer: {
    user: userReducers,
  },
});

export default store;
