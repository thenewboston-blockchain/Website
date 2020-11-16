export const getImageSizeBasedOnDeviceRatio = (size: number): number => {
  const {devicePixelRatio} = window;
  return size * devicePixelRatio;
};
