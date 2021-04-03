import axios from 'axios';

import {standardHeaders} from 'utils/requests';

import {APIResponse} from 'types/api';
import {User} from 'types/app/User';

export async function createUser({
  display_name,
  email,
  password,
}: {
  display_name: string;
  email: string;
  password: string;
}) {
  return axios.post(`${process.env.REACT_APP_BACKEND_API}/users`, {display_name, email, password}, standardHeaders());
}

export async function getUser({uuid}: {uuid: string}): Promise<APIResponse<User>> {
  return axios.get(`${process.env.REACT_APP_BACKEND_API}/users/${uuid}`);
}
