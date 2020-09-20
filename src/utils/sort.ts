export const sortByDateKey = (key: string, ordering: 'asc' | 'desc' = 'asc') => (a: any, b: any) => {
  return ordering === 'asc' ? a[key] - b[key] : b[key] - a[key];
};

export const sortByNumberKey = (key: string, ordering: 'asc' | 'desc' = 'asc') => (a: any, b: any) => {
  if (a[key] < b[key]) return ordering === 'asc' ? -1 : 1;
  if (a[key] > b[key]) return ordering === 'asc' ? 1 : -1;
  return 0;
};
