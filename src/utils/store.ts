import {PayloadAction} from '@reduxjs/toolkit';

export function setLocalAndStateReducer<T>(localStorageKey: string) {
  return (state: any, action: PayloadAction<T>) => {
    localStorage.setItem(localStorageKey, JSON.stringify(action.payload));
    return action.payload;
  };
}
