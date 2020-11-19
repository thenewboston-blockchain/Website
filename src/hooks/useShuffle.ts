import {useEffect, useRef, useState} from 'react';
import {shuffle} from 'lodash-es';

function useShuffle(defaultEntry: string, entries: {[key: string]: string}, keys: string[], shouldShuffle = false) {
  const [entry, setEntry] = useState(defaultEntry);
  const shuffledKeys = useRef(shuffle(keys));
  const index = useRef(0);

  useEffect(() => {
    if (shouldShuffle) {
      const key = shuffledKeys.current[index.current];
      setEntry(entries[key]);
      index.current += 1;
      if (index.current === keys.length) index.current = 0;
    }
  }, [defaultEntry, entries, keys, shouldShuffle]);
  return entry;
}

export default useShuffle;
