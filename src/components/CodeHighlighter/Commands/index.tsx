import React, {FC} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';
import BaseCodeHighlighter from '../BaseCodeHighlighter';
import './Commands.scss';

interface ComponentProps {
  className?: string;
  code: string;
  heading?: string;
}

const Commands: FC<ComponentProps> = ({className, code, heading}) => {
  return (
    <div className="Commands">
      {heading ? (
        <div className={clsx('Commands__heading', {...getCustomClassNames(className, '__heading', true)})}>
          {heading}:
        </div>
      ) : null}
      <BaseCodeHighlighter code={code} language="bash" light showLineNumbers={false} />
    </div>
  );
};

export default Commands;
