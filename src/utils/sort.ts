interface SortType {
  [key: string]: any;
}

export const sortByDateKey = (key: string, ordering: 'asc' | 'desc' = 'asc') => (a: SortType, b: SortType): number => {
  const dateA = new Date(a[key]);
  const dateB = new Date(b[key]);
  const diff = dateA.getTime() - dateB.getTime();
  if (diff < 0) return ordering === 'asc' ? -1 : 1;
  if (diff > 0) return ordering === 'asc' ? 1 : -1;
  return 0;
};

export const sortByNumberKey = (key: string, ordering: 'asc' | 'desc' = 'asc') => (
  a: SortType,
  b: SortType,
): number => {
  const diff = a[key] - b[key];
  if (diff < 0) return ordering === 'asc' ? -1 : 1;
  if (diff > 0) return ordering === 'asc' ? 1 : -1;
  return 0;
};
