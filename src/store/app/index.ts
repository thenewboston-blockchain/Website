import {combineReducers} from '@reduxjs/toolkit';

import authentication, {setAuthentication} from './authentication';

export {setAuthentication};

const appReducers = combineReducers({
  authentication: authentication.reducer,
});

export default appReducers;
