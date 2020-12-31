import {createSlice} from '@reduxjs/toolkit';

import {APP_ACTIVE_USER} from 'constants/redux';
import {ActiveUser} from 'types/app/User';
import {getLocalStorageItem} from 'utils/browser';
import {setLocalAndStateReducer, unsetLocalAndStateReducer} from 'utils/store';

const activeUser = createSlice({
  initialState: getLocalStorageItem(APP_ACTIVE_USER, null) as ActiveUser,
  name: APP_ACTIVE_USER,
  reducers: {
    setActiveUser: setLocalAndStateReducer<ActiveUser>(APP_ACTIVE_USER),
    unsetActiveUser: unsetLocalAndStateReducer(APP_ACTIVE_USER, null),
  },
});

export const {setActiveUser, unsetActiveUser} = activeUser.actions;

export default activeUser;
