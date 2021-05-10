import React, {FC, useState, ReactNode} from 'react';

import {Icon, IconType} from '@thenewboston/ui';
import clsx from 'clsx';

import './FaqDropdownCard.scss';

type Props = {
  className?: string;
  question: ReactNode;
  answer: ReactNode;
};

const FaqDropdownCard: FC<Props> = ({answer, className, question}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);
  return (
    <div className={`FaqDropdownCard ${className}`}>
      <div className="FaqDropdownCard__dropdown-container">
        <div className="FaqDropdownCard__left-container">
          <div className="FaqDropdownCard__question">{question}</div>
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
