export interface Dict<T> {
  [key: string]: T;
}

type GenericFunctionConstructor<T> = (...args: any[]) => T;

export type GenericFunction = GenericFunctionConstructor<any>;

export type GenericVoidFunction = GenericFunctionConstructor<void | Promise<void>>;
