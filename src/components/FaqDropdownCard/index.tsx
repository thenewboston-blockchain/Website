import React, {FC, ReactNode, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import {useBooleanState} from 'hooks';
import {HashLink} from 'components';
import './FaqDropdownCard.scss';

type Props = {
  answer: ReactNode;
  className?: string;
  id: string;
  question: ReactNode;
};

const FaqDropdownCard: FC<Props> = ({answer, className, id, question}) => {
  const {hash, pathname} = useLocation();
  const [expanded, toggleExpanded, setExpandedAsTrue] = useBooleanState(false);

  useEffect(() => {
    if (hash.slice(1) === id) {
      setExpandedAsTrue();
    }
  }, [hash, id, pathname, setExpandedAsTrue]);

  return (
    <div className={clsx('FaqDropdownCard', className)}>
      <div className="FaqDropdownCard__anchor" id={id} />
      <div className="FaqDropdownCard__dropdown-container">
        <div className="FaqDropdownCard__left-container">
          <Link className="FaqDropdownCard__question" to={`${pathname}#${id}`} onClick={toggleExpanded}>
            {question}
          </Link>
          <HashLink className="FaqDropdownCard__HashLink" id={id} />
        </div>
        <Icon
          className="FaqDropdownCard__toggle-icon"
          icon={expanded ? IconType.chevronUp : IconType.chevronDown}
          onClick={toggleExpanded}
        />
      </div>
      <div className={clsx('FaqDropdownCard__answer', {'FaqDropdownCard__answer--expanded': expanded})}>{answer}</div>
    </div>
  );
};

export default FaqDropdownCard;
