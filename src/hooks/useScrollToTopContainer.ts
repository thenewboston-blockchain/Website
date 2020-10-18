/* eslint-disable react-hooks/exhaustive-deps */

import {RefObject, useEffect, useRef} from 'react';

function useScrollToTopContainer<E extends HTMLElement>(dependencies: any[] = []): RefObject<E> {
  const containerRef = useRef<E>(null);

  useEffect(() => {
    containerRef.current?.scrollTo(0, 0);
  }, dependencies);

  return containerRef;
}

export default useScrollToTopContainer;
