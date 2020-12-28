import {combineReducers} from '@reduxjs/toolkit';

import {ACTIVE_USER} from 'constants/redux';
import activeUser, {setActiveUser} from './active-user';

export {setActiveUser};

const appReducers = combineReducers({
  [ACTIVE_USER]: activeUser.reducer,
});

export default appReducers;
