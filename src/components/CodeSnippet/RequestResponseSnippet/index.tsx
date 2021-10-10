import React from 'react';
import {SFC} from 'types/generic';

import BaseCodeSnippet, {SnippetLang} from '../BaseCodeSnippet';
import * as S from './Styles';

export interface RequestResponseSnippetProps {
  code: string;
  heading?: string;
}

const RequestResponse: SFC<RequestResponseSnippetProps> = ({className, code, heading}) => {
  return (
    <div className={className} data-testid="RequestResponseSnippet">
      {heading ? (
        <S.Heading className={className} data-testid="RequestResponseSnippet__heading">
          {heading}:
        </S.Heading>
      ) : null}
      <BaseCodeSnippet code={code} language={SnippetLang.json} showLineNumbers={false} />
    </div>
  );
};

export default RequestResponse;
