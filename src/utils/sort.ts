import parse from 'date-fns/parse';

export const sortByDateKey = (key: string, ordering: 'asc' | 'desc' = 'asc') => (a: any, b: any) => {
  const dateA: any = parse(a[key], 'L/d/yy', new Date());
  const dateB: any = parse(b[key], 'L/d/yy', new Date());
  return ordering === 'asc' ? dateA - dateB : dateB - dateA;
};
