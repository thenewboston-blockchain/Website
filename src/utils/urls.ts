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

/**
 * Currently, the images provided from BE are generated with the presigned url for S3,
 * which expires after 7 days.
 * We currently have this workaround to remove the query params from the image src
 * Note that we will need to solve the root cause from the BE and remove this
 * @param src : image URL provided from BE api
 */
export const getSrcWithoutParams = (src: string) => {
  return src.substring(0, src.indexOf('?')); // removes all query params from src
};
