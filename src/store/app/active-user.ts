import {createSlice} from '@reduxjs/toolkit';

import {APP_ACTIVE_USER} from 'constants/redux';
import {ActiveUser} from 'types/app/ActiveUser';
import {Dict} from 'types/store';
import {setStateReducer} from 'utils/store';

const activeUser = createSlice({
  initialState: {} as Dict<any>,
  name: APP_ACTIVE_USER,
  reducers: {
    setActiveUser: setStateReducer<ActiveUser>(),
  },
});

export const {setActiveUser} = activeUser.actions;

export default activeUser;
