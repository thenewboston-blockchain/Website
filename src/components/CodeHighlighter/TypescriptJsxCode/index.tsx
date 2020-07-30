import React, {FC} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';
import BaseCodeHighlighter from '../BaseCodeHighlighter';
import './TypescriptJsxCode.scss';

interface ComponentProps {
  className?: string;
  code: string;
  heading?: string;
}

const TypescriptJsxCode: FC<ComponentProps> = ({className, code, heading}) => {
  return (
    <div className="TypescriptJsxCode">
      {heading ? (
        <div className={clsx('TypescriptJsxCode__heading', {...getCustomClassNames(className, '__heading', true)})}>
          {heading}:
        </div>
      ) : null}
      <BaseCodeHighlighter code={code} language="typescript" showLineNumbers={false} />
    </div>
  );
};

export default TypescriptJsxCode;
