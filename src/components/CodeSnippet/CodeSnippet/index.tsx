import React from 'react';
import {SFC} from 'types/generic';

import BaseCodeSnippet, {SnippetLang} from '../BaseCodeSnippet';
import * as S from './Styles';

interface ComponentProps {
  code: string;
  heading?: string;
  language?: SnippetLang;
}

const CodeSnippet: SFC<ComponentProps> = ({className, code, heading, language = SnippetLang.bash}) => {
  return (
    <div className={className} data-testid="CodeSnippet">
      {heading ? (
        <S.Heading className={className} data-testid="CodeSnippet__heading">
          {heading}:
        </S.Heading>
      ) : null}
      <BaseCodeSnippet code={code} language={language} light={language === SnippetLang.bash} showLineNumbers={false} />
    </div>
  );
};

export default CodeSnippet;
