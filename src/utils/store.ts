import {PayloadAction} from '@reduxjs/toolkit';

export function setStateReducer<T>() {
  return (state: any, action: PayloadAction<T>) => action.payload;
}
