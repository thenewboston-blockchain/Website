import React, {FC} from 'react';
import clsx from 'clsx';

import {A, Label, TotalAmount} from 'components';
import {AMOUNT_COLOR} from 'constants/github';
import {Assignee, GitHubLabel, GitHubUser} from 'types/github';

import './Task.scss';

interface ComponentProps {
  amount: number;
  assignees: Assignee[];
  className?: string;
  creator: GitHubUser;
  createdAt: string;
  githubLabels: GitHubLabel[];
  htmlUrl: string;
  number: number;
  repositoryName: string;
  title: string;
}

const Task: FC<ComponentProps> = ({
  amount,
  assignees,
  className,
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
      <img alt={login} className="Task__assignee" key={login} src={avatar_url} />
    ));
  };

  const renderCreatorLink = () => {
    const url = `https://github.com/${creator.login}`;
    return (
      <A className="Task__issue-bottom-link" href={url}>
        {creator.login}
      </A>
    );
  };

  const renderIssueLink = () => {
    const url = `https://github.com/thenewboston-developers/${repositoryName}/issues/${number}`;
    return (
      <A className="Task__issue-bottom-link" href={url}>
        {`#${number}`}
      </A>
    );
  };

  const renderLabels = () => {
    return githubLabels
      .filter(({color}) => color.toLowerCase() !== AMOUNT_COLOR)
      .map(({color, name}) => <Label className="Task__Label" color={color} key={name} name={name} />);
  };

  const renderRepositoryLink = () => {
    const url = `https://github.com/thenewboston-developers/${repositoryName}`;
    return (
      <A className="Task__issue-bottom-link" href={url}>
        {repositoryName}
      </A>
    );
  };

  return (
    <div className={clsx('Task', className)} key={htmlUrl}>
      <div className="Task__left">
        <div className="Task__issue-top">
          <A className="Task__title" href={htmlUrl}>
            {title}
          </A>
          {renderLabels()}
        </div>
        <div className="Task__issue-bottom">
          {renderRepositoryLink()} &middot; {renderIssueLink()} &middot; Opened {createdAt} by {renderCreatorLink()}
        </div>
      </div>
      <div className="Task__middle">
        {!!assignedUsers.length && (
          <>
            <div className="Task__assignees-title">Assignees</div>
            {renderAssignees()}
          </>
        )}
      </div>
      <div className="Task__right">
        <TotalAmount amount={amount} className="Task__TotalAmount" title="Reward" />
      </div>
    </div>
  );
};

export default Task;
