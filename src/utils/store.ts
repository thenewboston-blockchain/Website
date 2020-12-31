import {PayloadAction} from '@reduxjs/toolkit';

import {APIModel} from 'types/api';

type PayloadActionAPIModel<T> = PayloadAction<APIModel & T>;

export function setLocalAndStateReducer<T>(localStorageKey: string) {
  return (state: any, {payload}: PayloadAction<T>) => {
    const data = {...state, ...payload};
    localStorage.setItem(localStorageKey, JSON.stringify(data));
    return data;
  };
}

export function setModelReducer<T>(localStorageKey: string) {
  return (state: any, {payload}: PayloadActionAPIModel<T>) => {
    state[payload.pk] = payload;
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  };
}

export function unsetLocalAndStateReducer(localStorageKey: string, defaultValue: any) {
  return () => {
    localStorage.setItem(localStorageKey, defaultValue ? JSON.stringify(defaultValue) : defaultValue);
    return defaultValue;
  };
}
