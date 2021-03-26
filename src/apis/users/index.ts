import axios from 'axios';

import {standardHeaders} from 'utils/requests';

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
