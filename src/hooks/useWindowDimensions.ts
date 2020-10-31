import {useEffect, useState} from 'react';

interface WindowDimension {
  height: number;
  width: number;
}

const getWindowDimensions = (): WindowDimension => {
  const {innerHeight: height, innerWidth: width} = window;

  return {
    height,
    width,
  };
};

const useWindowDimensions = () => {
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
