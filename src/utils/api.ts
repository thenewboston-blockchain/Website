import axios from 'axios';

import {AuthResponse} from 'types/api';

export const fetchAccessToken = async (code: string) => {
  const {data} = await axios.post<AuthResponse>(`${process.env.REACT_APP_BACKEND_API}/auth/login/github`, {
    code,
  });
  return data;
};
