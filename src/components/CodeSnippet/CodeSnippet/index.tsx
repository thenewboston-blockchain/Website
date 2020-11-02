import React, {FC} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

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
    <div className={clsx('CodeSnippet', className)}>
      {heading ? (
        <div
          className={clsx('CodeSnippet__heading', {
            ...getCustomClassNames(className, '__heading', true),
          })}
        >
          {heading}:
        </div>
      ) : null}
      <BaseCodeSnippet code={code} language={language} light={language === SnippetLang.bash} showLineNumbers={false} />
    </div>
  );
};

export default CodeSnippet;
