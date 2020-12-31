import axios from 'axios';

import {setActiveUser} from 'store/app';
import {User} from 'types/app/User';
import {AppDispatch} from 'types/store';
import {authHeaders} from 'utils/requests';

export const editUser = (data: Partial<User>) => async (dispatch: AppDispatch) => {
  const response = await axios.patch(`${process.env.REACT_APP_BACKEND_API}/users/${data.pk}`, data, authHeaders());
  dispatch(setActiveUser(response.data));
  return response;
};
