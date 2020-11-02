import {useEffect, useRef} from 'react';

type EventName = 'mousedown' | 'scroll';

const useEventListener = (
  eventName: EventName,
  handler: (e: Event) => any,
  element: EventTarget = window,
  capture = false,
): void => {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (e: Event) => handlerRef.current(e);

    element.addEventListener(eventName, eventListener, capture);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [capture, element, eventName]);
};

export default useEventListener;
