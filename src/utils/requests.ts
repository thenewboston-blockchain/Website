import axios from 'axios';
import {APP_ACTIVE_USER} from 'constants/redux';
import {getLocalStorageItem, saveETagToLocalStorage, setLocalStorageItem} from './browser';

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

export async function githubGetRequestAbstract<R>({
  eTagKey,
  cachedContentKey,
  params = {},
  url,
}: {
  eTagKey: string;
  cachedContentKey: string;
  params?: any;
  url: string;
}) {
  const eTag = getLocalStorageItem(eTagKey, '');

  const response = await axios.get<R>(url, {
    params,
    validateStatus: validateGitHubApiStatus,
    ...githubHeaders(eTag),
  });

  // get cached content if not modified
  if (response.status === 304) {
    return getLocalStorageItem(cachedContentKey, []);
  }
  saveETagToLocalStorage(eTagKey, response.headers.etag);
  setLocalStorageItem(cachedContentKey, JSON.stringify(response.data));
  return response.data;
}

export function validateGitHubApiStatus(status: number) {
  return (status >= 200 && status <= 299) || status === 304;
}
