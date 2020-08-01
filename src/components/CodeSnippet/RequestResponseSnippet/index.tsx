import React, {FC} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';
import BaseCodeSnippet, {SnippetLang} from '../BaseCodeSnippet';
import './RequestResponseSnippet.scss';

interface ComponentProps {
  className?: string;
  code: string;
  heading?: string;
}

const RequestResponse: FC<ComponentProps> = ({className, code, heading}) => {
  return (
    <div className="RequestResponseSnippet">
      {heading ? (
        <div
          className={clsx('RequestResponseSnippet__heading', {...getCustomClassNames(className, '__heading', true)})}
        >
          {heading}:
        </div>
      ) : null}
      <BaseCodeSnippet code={code} language={SnippetLang.json} showLineNumbers={false} />
    </div>
  );
};

export default RequestResponse;
