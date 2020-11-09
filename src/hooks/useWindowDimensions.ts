import {useEffect, useState} from 'react';

interface WindowDimension {
  clientWidth: number;
  height: number;
  width: number;
}

const getWindowDimensions = (): WindowDimension => {
  const {innerHeight: height, innerWidth: width} = window;
  const {clientWidth} = document.documentElement;

  return {
    clientWidth,
    height,
    width,
  };
};

const useWindowDimensions = (): WindowDimension => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimension>(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
