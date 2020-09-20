import React, {FC} from 'react';
import clsx from 'clsx';

import {A, Label, TotalAmount} from 'components';
import {Assignee, GitHubLabel} from 'types/github';

import './Task.scss';

const AMOUNT_COLOR = '09825d';

interface ComponentProps {
  assignees: Assignee[];
  className?: string;
  githubLabels: GitHubLabel[];
  htmlUrl: string;
  number: number;
  title: string;
}

const Task: FC<ComponentProps> = ({assignees, className, githubLabels, htmlUrl, number, title}) => {
  const assignedUsers = assignees.filter((assignee) => !!assignee.login && !!assignee.avatar_url);

  const renderAssignees = () => {
    return assignedUsers.map(({avatar_url, login}) => (
      <img alt={login} className="Task__assignee" key={login} src={avatar_url} />
    ));
  };

  const renderAmount = () => {
    const amountLabel = githubLabels.filter(({color}) => color.toLowerCase() === AMOUNT_COLOR);
    if (!amountLabel.length) return null;
    return amountLabel.map(({name}) => (
      <TotalAmount amount={parseInt(name, 10)} className="Task__TotalAmount" key={name} title="Reward" />
    ))[0];
  };

  const renderLabels = () => {
    return githubLabels
      .filter(({color}) => color.toLowerCase() !== AMOUNT_COLOR)
      .map(({color, name}) => <Label className="Task__Label" color={color} key={name} name={name} />);
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
        <div className="Task__issue-bottom">{`#${number}`}</div>
      </div>
      <div className="Task__middle">
        {!!assignedUsers.length && (
          <>
            <div className="Task__assignees-title">Assignees</div>
            {renderAssignees()}
          </>
        )}
      </div>
      <div className="Task__right">{renderAmount()}</div>
    </div>
  );
};

export default Task;
