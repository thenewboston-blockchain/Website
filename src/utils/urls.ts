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
