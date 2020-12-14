import axios from 'axios';

import {setAuthentication} from 'store/user';
import {AppDispatch} from 'types/store';

export const authenticateUser = () => async (dispatch: AppDispatch) => {
  const {data} = await axios.post<any>(`${process.env.REACT_APP_BACKEND_API}/login`);
  dispatch(setAuthentication(data));
};
