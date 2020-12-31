import axios from 'axios';

import {setActiveUser} from 'store/app';
import {setUser} from 'store/models';
import {AppDispatch} from 'types/store';

interface LoginParameters {
  email: string;
  password: string;
}

export const login = (data: LoginParameters) => async (dispatch: AppDispatch) => {
  const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/login`, data);
  const {authentication, user} = response.data;
  dispatch(setActiveUser({...authentication, ...user}));
  dispatch(setUser(user));
  return response;
};
