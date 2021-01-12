import {combineReducers} from '@reduxjs/toolkit';

import {USERS} from 'constants/redux';
import users, {setUser} from './users';

export {setUser};

const modelReducers = combineReducers({
  [USERS]: users.reducer,
});

export default modelReducers;
