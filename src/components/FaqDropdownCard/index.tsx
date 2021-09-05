import React, {ReactNode, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Icon, IconType} from '@thenewboston/ui';

import {useBooleanState} from 'hooks';
import {SFC} from 'types/generic';
import * as S from './Styles';

type Props = {
  answer: ReactNode;
  id: string;
  question: ReactNode;
};

const FaqDropdownCard: SFC<Props> = ({answer, className, id, question}) => {
  const {hash, pathname} = useLocation();
  const [expanded, toggleExpanded, setExpandedAsTrue] = useBooleanState(false);

  useEffect(() => {
    if (hash.slice(1) === id) {
      setExpandedAsTrue();
    }
  }, [hash, id, pathname, setExpandedAsTrue]);

  return (
    <S.Container className={className}>
      <S.Anchor className="FaqDropdownCard__anchor" id={id} />
      <S.DropdownContainer>
        <S.LeftContainer>
          <S.Question to={`${pathname}#${id}`} onClick={toggleExpanded}>
            {question}
          </S.Question>
          <S.HashLink className="FaqDropdownCard__HashLink" id={id} />
        </S.LeftContainer>
        <Icon
          className="FaqDropdownCard__toggle-icon"
          icon={expanded ? IconType.chevronUp : IconType.chevronDown}
          onClick={toggleExpanded}
        />
      </S.DropdownContainer>
      {expanded && <S.ExpandedAnswer>{answer}</S.ExpandedAnswer>}
    </S.Container>
  );
};

export default FaqDropdownCard;
