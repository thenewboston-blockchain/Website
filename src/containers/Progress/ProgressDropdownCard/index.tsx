import React, {FC, useMemo, useState} from 'react';

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

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const progressPercentage = useMemo(
    () => (issues.filter((issue) => issue.state === 'closed').length / (issues.length || 1)) * 100,
    [issues],
  );

  return (
    <div className="ProgressDropdownCard">
      <div className="ProgressDropdownCard__dropdown-container">
        <div className="ProgressDropdownCard__left-container">
          <div className="ProgressDropdownCard__title">
            <div className="ProgressDropdownCard__title-name">{name}</div>
            <div className="ProgressDropdownCard__title-responsibility">{responsibility}</div>
          </div>
          <div className="ProgressDropdownCard__progress">
            <div className="ProgressDropdownCard__progress-bar">
              <div
                className={clsx('ProgressDropdownCard__progress-bar', 'ProgressDropdownCard__progress-bar--filled')}
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>
            <div className="ProgressDropdownCard__progress-percentage">{Math.floor(progressPercentage)}% complete</div>
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
          <Icon
            className="ProgressDropdownCard__toggle-icon"
            icon={expanded ? IconType.chevronUp : IconType.chevronDown}
            onClick={toggleExpanded}
          />
        </div>
      </div>
      {issues.length > 0 ? (
        <div
          className={clsx('ProgressDropdownCard__issues-container', {
            'ProgressDropdownCard__issues-container--expanded': expanded,
          })}
        >
          {issues.map((issue) => {
            return <ProgressIssueCard className="ProgressDropdownCard__issue" issue={issue} key={issue.id} />;
          })}
        </div>
      ) : (
        <div className="ProgressDropdownCard__issues-container--empty">No issues available.</div>
      )}
    </div>
  );
};

export default ProgressDropdownCard;
