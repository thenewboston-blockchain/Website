import React, {FC} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

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
        <div className={clsx('RequestResponseSnippet__heading', {...bemify(className, '__heading')})}>{heading}:</div>
      ) : null}
      <BaseCodeSnippet code={code} language={SnippetLang.json} showLineNumbers={false} />
    </div>
  );
};

export default RequestResponse;
