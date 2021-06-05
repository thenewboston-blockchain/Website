import React, {FC} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import BaseCodeSnippet, {SnippetLang} from '../BaseCodeSnippet';
import './CodeSnippet.scss';

interface ComponentProps {
  className?: string;
  code: string;
  heading?: string;
  language?: SnippetLang;
}

const CodeSnippet: FC<ComponentProps> = ({className, code, heading, language = SnippetLang.bash}) => {
  return (
    <div className={clsx('CodeSnippet', className)} data-testid="CodeSnippet">
      {heading ? (
        <div
          className={clsx('CodeSnippet__heading', {
            ...bemify(className, '__heading'),
          })}
          data-testid="CodeSnippet__heading"
        >
          {heading}:
        </div>
      ) : null}
      <BaseCodeSnippet code={code} language={language} light={language === SnippetLang.bash} showLineNumbers={false} />
    </div>
  );
};

export default CodeSnippet;
