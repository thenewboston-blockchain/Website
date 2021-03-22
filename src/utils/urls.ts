export const getFirstPathParam = (path: string): string => path.split('/').filter((pathParam) => !!pathParam)[0];

// Since replaceAll is not available in some older browser
// export const slugify = (path: string, searchValue: string, replaceValue: string): string =>
//   path ? path.replaceAll(searchValue, replaceValue) : path;

export const slugify = (path: string, searchValue: string, replaceValue: string): string =>
  path ? path.split(searchValue).join(replaceValue) : path;
