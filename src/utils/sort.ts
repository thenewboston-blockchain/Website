interface SortType {
  [key: string]: any;
}

export const sortByDateKey = (key: string, ordering: 'asc' | 'desc' = 'asc') => (a: SortType, b: SortType): number => {
  return ordering === 'asc' ? a[key] - b[key] : b[key] - a[key];
};

export const sortByNumberKey = (key: string, ordering: 'asc' | 'desc' = 'asc') => (
  a: SortType,
  b: SortType,
): number => {
  if (a[key] < b[key]) return ordering === 'asc' ? -1 : 1;
  if (a[key] > b[key]) return ordering === 'asc' ? 1 : -1;
  return 0;
};
