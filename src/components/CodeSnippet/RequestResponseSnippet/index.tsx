import React, {FC} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import BaseCodeSnippet, {SnippetLang} from '../BaseCodeSnippet';
import './RequestResponseSnippet.scss';

export interface RequestResponseSnippetProps {
  className?: string;
  code: string;
  heading?: string;
}

const RequestResponse: FC<RequestResponseSnippetProps> = ({className, code, heading}) => {
  return (
    <div className={clsx('RequestResponseSnippet', className)} data-testid="RequestResponseSnippet">
      {heading ? (
        <div
          className={clsx('RequestResponseSnippet__heading', {...bemify(className, '__heading')})}
          data-testid="RequestResponseSnippet__heading"
        >
          {heading}:
        </div>
      ) : null}
      <BaseCodeSnippet code={code} language={SnippetLang.json} showLineNumbers={false} />
    </div>
  );
};

export default RequestResponse;
