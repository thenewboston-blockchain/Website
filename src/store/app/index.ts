import {combineReducers} from '@reduxjs/toolkit';

import {ACTIVE_USER, TUTORIALS} from 'constants/redux';
import activeUser, {setActiveUser, unsetActiveUser} from './active-user';
import tutorials from './tutorials';

export {setActiveUser, unsetActiveUser};

const appReducers = combineReducers({
  [ACTIVE_USER]: activeUser.reducer,
  [TUTORIALS]: tutorials.reducer,
});

export default appReducers;
