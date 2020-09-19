import parse from 'date-fns/parse';

export const sortByDateKey = (key: string, ordering: 'asc' | 'desc' = 'asc') => (a: any, b: any) => {
  const dateA: any = parse(a[key], 'L/d/yy', new Date());
  const dateB: any = parse(b[key], 'L/d/yy', new Date());
  return ordering === 'asc' ? dateA - dateB : dateB - dateA;
};

export const sortByNumberKey = (key: string, ordering: 'asc' | 'desc' = 'asc') => (a: any, b: any) => {
  if (a[key] < b[key]) return ordering === 'asc' ? -1 : 1;
  if (a[key] > b[key]) return ordering === 'asc' ? 1 : -1;
  return 0;
};
