export enum SortBy {
  none = 'Sort By None',
  reward = 'Sort By Reward',
  created = 'Sort By Created Date',
}

export interface Dict<T> {
  [key: string]: T;
}

type GenericFunctionConstructor<T> = (...args: any[]) => T;

export type GenericVoidFunction = GenericFunctionConstructor<void | Promise<void>>;
