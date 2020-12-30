import {combineReducers} from '@reduxjs/toolkit';

import {ACTIVE_USER} from 'constants/redux';
import activeUser, {setActiveUser, unsetActiveUser} from './active-user';

export {setActiveUser, unsetActiveUser};

const appReducers = combineReducers({
  [ACTIVE_USER]: activeUser.reducer,
});

export default appReducers;
