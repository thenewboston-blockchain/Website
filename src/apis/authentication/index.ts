import axios from 'axios';

export async function login({email, password}: {email: string; password: string}) {
  return axios.post(`${process.env.REACT_APP_BACKEND_API}/login`, {email, password});
}
