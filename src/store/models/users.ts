import {createSlice} from '@reduxjs/toolkit';

import {MODELS_USERS} from 'constants/redux';
import {User} from 'types/app/User';
import {Dict} from 'types/generic';
import {getLocalStorageItem} from 'utils/browser';
import {setModelReducer} from 'utils/store';

const users = createSlice({
  initialState: getLocalStorageItem(MODELS_USERS, {}) as Dict<User>,
  name: MODELS_USERS,
  reducers: {
    setUser: setModelReducer<User>(MODELS_USERS),
  },
});

export const {setUser} = users.actions;

export default users;
