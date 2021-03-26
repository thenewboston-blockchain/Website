import {setActiveUser} from 'store/app';
import {setUser} from 'store/models';
import {AppDispatch} from 'types/store';

import * as api from 'apis/authentication';

interface LoginParameters {
  email: string;
  password: string;
}

export const login = (data: LoginParameters) => async (dispatch: AppDispatch) => {
  const response = await api.login({...data});
  const {authentication, user} = response.data;
  dispatch(setActiveUser({...authentication, ...user}));
  dispatch(setUser(user));
  return response;
};
