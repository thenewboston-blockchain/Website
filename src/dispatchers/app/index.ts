import axios from 'axios';

import {setActiveUser} from 'store/app';
import {AppDispatch} from 'types/store';

interface LoginParameters {
  email: string;
  password: string;
}

export const login = (data: LoginParameters) => async (dispatch: AppDispatch) => {
  const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/login`, data);
  dispatch(setActiveUser(response.data));
  return response;
};
