export const getLocalStorageItem = (key: string, defaultValue: any) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};

export const setLocalStorageItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const saveETagToLocalStorage = (key: string, eTag: string) => {
  // syntax
  // ETag: W/"<etag_value>"
  // ETag: "<etag_value>"
  const parsedETag = eTag.replace('W/', ''); // get <etag_value> from eTag
  setLocalStorageItem(key, parsedETag);
};
