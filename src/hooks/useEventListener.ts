import {useEffect, useRef} from 'react';

type EventName = 'mousedown';

const useEventListener = (eventName: EventName, handler: (e: Event) => any, element: EventTarget = window): void => {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (e: Event) => handlerRef.current(e);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [element, eventName]);
};

export default useEventListener;
