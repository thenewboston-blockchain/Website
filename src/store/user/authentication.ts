import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {APP_AUTHENTICATION} from 'constants/redux';
import {Dict} from 'types/store';

const authentication = createSlice({
  initialState: {} as Dict<any>,
  name: APP_AUTHENTICATION,
  reducers: {
    setAuthentication: (state, {payload}: PayloadAction<any>) => {
      const {accessToken} = payload;
      state.accessToken = accessToken;
    },
  },
});

export const {setAuthentication} = authentication.actions;

export default authentication;
