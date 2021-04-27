import React, {FC} from 'react';

import {Avatar} from 'components';
import {useWindowDimensions} from 'hooks';
import {Icon, IconType} from '@thenewboston/ui';
import {BaseIssue} from 'types/github';
import './ProgressIssueCard.scss';

type Props = {
  issue: BaseIssue;
};

const ProgressIssueCard: FC<Props> = ({issue}) => {
  const {width} = useWindowDimensions();
  return (
    <div className="ProgressIssueCard">
      <div className="ProgressIssueCard__left-container">
        {issue.state === 'open' ? (
          <Icon className="ProgressIssueCard__icon-open" icon={IconType.alertCircleOutline} size={20} />
        ) : (
          // TODO: update to alert circle checked outline when PR is merged
          <Icon className="ProgressIssueCard__icon-closed" icon={IconType.alertCircleOutline} size={20} />
        )}
        <div className="ProgressIssueCard__details">
          <div
            className="ProgressIssueCard__issue-title"
            onClick={() => window.open(issue.html_url, '_blank', 'noopener noreferrer')}
            role="button"
            tabIndex={0}
          >
            {issue.title}
          </div>
          <div className="ProgressIssueCard__issue-opened-by">
            #{issue.number} opened by {issue.user.login}
          </div>
        </div>
      </div>
      {width >= 414 && (
        <div className="ProgressIssueCard__assignees">
          {issue.assignees.map((assignee, i) => {
            return (
              <Avatar
                bordered
                className={i !== issue.assignees.length - 1 ? 'ProgressIssueCard__assignee-avatar' : ''}
                src={assignee.avatar_url}
                key={assignee.id}
                size={24}
                onClick={() => window.open(assignee.html_url, '_blank', 'noopener noreferrer')}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProgressIssueCard;
