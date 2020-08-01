export const getFirstPathParam = (path: string): string => path.split('/').filter((pathParam) => !!pathParam)[0];
