import React from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';
import {SFC} from 'types/generic';

import BaseCodeSnippet, {SnippetLang} from '../BaseCodeSnippet';
import './RequestResponseSnippet.scss';

export interface RequestResponseSnippetProps {
  code: string;
  heading?: string;
}

const RequestResponse: SFC<RequestResponseSnippetProps> = ({className, code, heading}) => {
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
