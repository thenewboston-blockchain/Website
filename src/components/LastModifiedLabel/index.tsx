import React, {FC, memo, useEffect, useState} from 'react';
import format from 'date-fns/format';
import {getFileLastModifiedDate} from 'utils/github';

import './LastModifiedLabel.scss';

interface ComponentProps {
  filePath: string;
}

const LastModifiedLabel: FC<ComponentProps> = ({filePath}) => {
  const [lastModified, setLastModified] = useState<Date | null>(null);

  useEffect(() => {
    (async () => {
      const date = await getFileLastModifiedDate('Website', filePath);

      setLastModified(date);
    })();
  }, [filePath]);

  if (!lastModified) return null;

  return <div className="LastModifiedLabel">Last updated at {format(lastModified, 'L/d/yy')}</div>;
};

export default memo(LastModifiedLabel);
