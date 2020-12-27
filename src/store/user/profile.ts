import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Dict} from 'types/store';
import {USER_PROFILE} from 'constants/redux';

const profile = createSlice({
  initialState: {} as Dict<any>,
  name: USER_PROFILE,
  reducers: {
    setProfile: (state, {payload}: PayloadAction<any>) => {
      const {name, account, githubUsername} = payload;
      state.name = name;
      state.account = account;
      state.githubUsername = githubUsername;
    },
  },
});

export const {setProfile} = profile.actions;

export default profile;
