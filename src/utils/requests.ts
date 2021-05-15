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

export function githubHeaders(eTag: string) {
  return {
    headers: {
      'If-None-Match': `"${eTag}"`, // provide cached etag to see if resource has been updated
    },
  };
}

export function validateGitHubApiStatus(status: number) {
  return (status >= 200 && status <= 299) || status === 304;
}
