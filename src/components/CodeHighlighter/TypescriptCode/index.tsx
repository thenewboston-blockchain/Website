import React, {FC} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

import BaseCodeHighlighter from '../BaseCodeHighlighter';
import './TypescriptCode.scss';

interface ComponentProps {
  className?: string;
  code: string;
  heading?: string;
}

const TypescriptCode: FC<ComponentProps> = ({className, code, heading}) => {
  return (
    <div className="TypescriptCode">
      {heading ? (
        <div className={clsx('TypescriptCode__heading', {...getCustomClassNames(className, '__heading', true)})}>
          {heading}:
        </div>
      ) : null}
      <BaseCodeHighlighter code={code} language="typescript" showLineNumbers={false} />
    </div>
  );
};

export default TypescriptCode;
