import {combineReducers} from '@reduxjs/toolkit';

import authentication, {setAuthentication} from './authentication';
import profile, {setProfile} from './profile';

export {setProfile, setAuthentication};

const appReducers = combineReducers({
  authentication: authentication.reducer,
  profile: profile.reducer,
});

export default appReducers;
