import store from 'store';

export type AppDispatch = typeof store.dispatch;

export interface Dict<T> {
  [key: string]: T;
}
