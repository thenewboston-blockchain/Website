import React, {FC, useEffect, useState, useRef} from 'react';

import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {BaseIssue} from 'types/github';
import ProgressIssueCard from '../ProgressIssueCard';
import './ProgressDropdownCard.scss';

type Props = {
  name: string;
  responsibility: string;
  issues: BaseIssue[];
};

const ProgressDropdownCard: FC<Props> = ({name, responsibility, issues}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [filledProgressBarWidth, setFilledProgressBarWidth] = useState<number>(0);
  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const progressFraction = issues.filter((issue) => issue.state === 'closed').length / (issues.length * 1.0);

  useEffect(() => {
    const calculateProgressBarWidth = () => {
      if (progressBarRef.current) {
        setFilledProgressBarWidth(progressBarRef.current.clientWidth * progressFraction);
      }
    };
    calculateProgressBarWidth();
    window.addEventListener('resize', calculateProgressBarWidth);
    return () => window.removeEventListener('resize', calculateProgressBarWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressBarRef, progressFraction]);

  return (
    <div className="ProgressDropdownCard">
      <div className="ProgressDropdownCard__dropdown-container">
        <div className="ProgressDropdownCard__left-container">
          <div className="ProgressDropdownCard__title">
            <div className="ProgressDropdownCard__title-name">{name}</div>
            <div className="ProgressDropdownCard__title-responsibility">{responsibility}</div>
          </div>
          <div className="ProgressDropdownCard__progress" ref={progressBarRef}>
            <div className="ProgressDropdownCard__progress-bar">
              <div
                className={clsx('ProgressDropdownCard__progress-bar', 'ProgressDropdownCard__progress-bar--filled')}
                style={{
                  width: `${filledProgressBarWidth}px`,
                }}
              />
            </div>
            <div className="ProgressDropdownCard__progress-percentage">
              {Math.floor(progressFraction * 100)}% complete
            </div>
          </div>
        </div>
        <Icon icon={IconType.chevronDown} onClick={toggleExpanded} />
      </div>
      {expanded && (
        <div className="ProgressDropdownCard__issues-container">
          {issues.map((issue) => {
            return <ProgressIssueCard issue={issue} key={issue.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProgressDropdownCard;
