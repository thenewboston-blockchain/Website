import React, {FC} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

import BaseCodeHighlighter from '../BaseCodeHighlighter';
import './JsxCode.scss';

interface ComponentProps {
  className?: string;
  code: string;
  heading?: string;
}

const JsxCode: FC<ComponentProps> = ({className, code, heading}) => {
  return (
    <div className="JsxCode">
      {heading ? (
        <div className={clsx('JsxCode__heading', {...getCustomClassNames(className, '__heading', true)})}>
          {heading}:
        </div>
      ) : null}
      <BaseCodeHighlighter code={code} language="jsx" showLineNumbers={false} />
    </div>
  );
};

export default JsxCode;
