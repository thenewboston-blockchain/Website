import React, {FC} from 'react';

import {A, Label, TotalAmount} from 'components';
import {AMOUNT_COLOR} from 'constants/github';
import {Assignee, GitHubLabel, GitHubUser} from 'types/github';

import './TasksTask.scss';

interface ComponentProps {
  amount: number;
  assignees: Assignee[];
  creator: GitHubUser;
  createdAt: string;
  githubLabels: GitHubLabel[];
  htmlUrl: string;
  number: number;
  repositoryName: string;
  title: string;
}

const TasksTask: FC<ComponentProps> = ({
  amount,
  assignees,
  creator,
  createdAt,
  githubLabels,
  htmlUrl,
  number,
  repositoryName,
  title,
}) => {
  const assignedUsers = assignees.filter((assignee) => !!assignee.login && !!assignee.avatar_url);

  const renderAssignees = () => {
    return assignedUsers.map(({avatar_url, login}) => (
      <img alt={login} className="TasksTask__assignee" key={login} src={avatar_url} />
    ));
  };

  const renderCreatorLink = () => {
    const url = `https://github.com/${creator.login}`;
    return (
      <A className="TasksTask__issue-details-link" href={url}>
        {creator.login}
      </A>
    );
  };

  const renderIssueLink = () => {
    const url = `https://github.com/thenewboston-developers/${repositoryName}/issues/${number}`;
    return (
      <A className="TasksTask__issue-details-link" href={url}>
        {`#${number}`}
      </A>
    );
  };

  const renderLabels = () => {
    return githubLabels
      .filter(({color}) => color.toLowerCase() !== AMOUNT_COLOR)
      .map(({color, name}) => <Label className="TasksTask__Label" color={color} key={name} name={name} />);
  };

  const renderRepositoryLink = () => {
    const url = `https://github.com/thenewboston-developers/${repositoryName}`;
    return (
      <A className="TasksTask__issue-details-link" href={url}>
        {repositoryName}
      </A>
    );
  };

  return (
    <div className="TasksTask">
      <div className="TasksTask__left">
        <A className="TasksTask__title" href={htmlUrl}>
          {title}
        </A>
        <div className="TasksTask__issue-details">
          {renderRepositoryLink()} &middot; {renderIssueLink()} &middot; Opened {createdAt} by {renderCreatorLink()}
        </div>
        {renderLabels()}
      </div>
      <div className="TasksTask__middle">
        {!!assignedUsers.length && (
          <>
            <div className="TasksTask__assignees-title">Assignees</div>
            {renderAssignees()}
          </>
        )}
      </div>
      <div className="TasksTask__right">
        <TotalAmount amount={amount} className="TasksTask__TotalAmount" title="Reward" />
      </div>
    </div>
  );
};

export default TasksTask;
