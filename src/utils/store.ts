import {PayloadAction} from '@reduxjs/toolkit';

export function setLocalAndStateReducer<T>(localStorageKey: string) {
  return (state: any, {payload}: PayloadAction<T>) => {
    const data = {...state, ...payload};
    localStorage.setItem(localStorageKey, JSON.stringify(data));
    return data;
  };
}

export function unsetLocalAndStateReducer(localStorageKey: string, defaultValue: any) {
  return () => {
    localStorage.setItem(localStorageKey, defaultValue ? JSON.stringify(defaultValue) : defaultValue);
    return defaultValue;
  };
}
