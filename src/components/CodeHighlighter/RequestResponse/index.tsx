import React, {FC} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';
import BaseCodeHighlighter from '../BaseCodeHighlighter';
import './RequestResponse.scss';

interface ComponentProps {
  className?: string;
  code: string;
  heading?: string;
}

const RequestResponse: FC<ComponentProps> = ({className, code, heading}) => {
  return (
    <div className="RequestResponse">
      {heading ? (
        <div className={clsx('RequestResponse__heading', {...getCustomClassNames(className, '__heading', true)})}>
          {heading}:
        </div>
      ) : null}
      <BaseCodeHighlighter code={code} language="json" showLineNumbers={false} />
    </div>
  );
};

export default RequestResponse;
