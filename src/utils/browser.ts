export const localStorageDefaultState = (key: string, defaultValue: any) => {
  const localStorageState = localStorage.getItem(key);
  return localStorageState ? JSON.parse(localStorageState) : defaultValue;
};
