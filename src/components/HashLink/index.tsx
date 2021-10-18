import React from 'react';
import {SFC} from 'types/generic';
import * as S from './Styles';

export interface HashLinkProps {
  id: string;
}

const HashLink: SFC<HashLinkProps> = ({className, id}) => {
  return (
    <S.HashLink className={className} data-testid="HashLink" href={`#${id}`}>
      #
    </S.HashLink>
  );
};

export default HashLink;
