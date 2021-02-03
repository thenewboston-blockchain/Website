import {APP_ACTIVE_USER} from 'constants/redux';
import {getLocalStorageItem} from './browser';

export function authHeaders() {
  const activeUser = getLocalStorageItem(APP_ACTIVE_USER, null);
  return {
    headers: {
      Authorization: `Bearer ${activeUser.access_token}`,
      'Content-Type': 'application/json',
    },
  };
}

export function standardHeaders() {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
}
