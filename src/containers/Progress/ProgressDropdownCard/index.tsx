import React, {FC, useEffect, useState, useRef} from 'react';

import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {BaseIssue} from 'types/github';
import {getRepositoryUrl} from 'utils/github';
import ProgressIssueCard from '../ProgressIssueCard';
import './ProgressDropdownCard.scss';

type Props = {
  name: string;
  responsibility: string;
  repoNames: string[];
  issues: BaseIssue[];
};

const ProgressDropdownCard: FC<Props> = ({name, responsibility, repoNames, issues}) => {
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
        <div className="ProgressDropdownCard__right-container">
          <div className="ProgressDropdownCard__github-container">
            {repoNames.map((repoName) => {
              return (
                <div
                  className="ProgressDropdownCard__github-repo"
                  key={repoName}
                  role="button"
                  tabIndex={0}
                  onClick={() => window.open(getRepositoryUrl(repoName), '_blank', 'noopener noreferrer')}
                >
                  <Icon icon={IconType.github} size={12} />
                  {repoName}
                </div>
              );
            })}
          </div>
          <Icon icon={IconType.chevronDown} onClick={toggleExpanded} />
        </div>
      </div>
      {expanded &&
        (issues.length > 0 ? (
          <div className="ProgressDropdownCard__issues-container">
            {issues.map((issue) => {
              return <ProgressIssueCard className="ProgressDropdownCard__issue" issue={issue} key={issue.id} />;
            })}
          </div>
        ) : (
          <div className="ProgressDropdownCard__issues-container--empty">No issues available.</div>
        ))}
    </div>
  );
};

export default ProgressDropdownCard;
