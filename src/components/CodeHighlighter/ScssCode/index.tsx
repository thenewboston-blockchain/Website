import React, {FC} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

import BaseCodeHighlighter from '../BaseCodeHighlighter';
import './ScssCode.scss';

interface ComponentProps {
  className?: string;
  code: string;
  heading?: string;
}

const ScssCode: FC<ComponentProps> = ({className, code, heading}) => {
  return (
    <div className="ScssCode">
      {heading ? (
        <div className={clsx('ScssCode__heading', {...getCustomClassNames(className, '__heading', true)})}>
          {heading}:
        </div>
      ) : null}
      <BaseCodeHighlighter code={code} language="scss" showLineNumbers={false} />
    </div>
  );
};

export default ScssCode;
