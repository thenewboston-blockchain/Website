import {Source} from 'types/tutorials';

export const getFirstPathParam = (path: string): string => path.split('/').filter((pathParam) => !!pathParam)[0];
export const getFirstThreePathParams = (path: string): string =>
  path
    .split('/')
    .filter((pathParam, index) => !!pathParam && index <= 3)
    .join('/');

export const getVideoUrl = (videoId: string, source: Source): string => {
  if (source === Source.youtube) {
    return `https://www.youtube.com/watch?v=${videoId}`;
  }
  return `https://www.vimeo.com/${videoId}`;
};

export const appendQueryParamsToUrl = (url: string, paramsObject: Record<string, string | boolean | undefined>) => {
  const params = Object.entries(paramsObject)
    .filter(([, value]) => typeof value !== 'undefined') // filter out undefined values
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  if (params.length > 0) {
    return `${url}?${params}`;
  }

  return url;
};
