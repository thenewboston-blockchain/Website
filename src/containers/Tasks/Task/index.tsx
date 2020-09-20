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
  title: string;
}

const Task: FC<ComponentProps> = ({assignees, className, githubLabels, htmlUrl, title}) => {
  const renderAssignees = () => {
    return assignees
      .filter((assignee) => !!assignee.login && !!assignee.avatar_url)
      .map(({avatar_url, login}) => <img alt={login} className="Task__assignee" key={login} src={avatar_url} />);
  };

  const renderAmount = () => {
    const amountLabel = githubLabels.filter(({color}) => color.toLowerCase() === AMOUNT_COLOR);
    if (!amountLabel.length) return null;
    return amountLabel.map(({name}) => (
      <TotalAmount amount={parseInt(name, 10)} className="Task__TotalAmount" key={name} title="Reward" />
    ))[0];
  };

  const renderStandardLabels = () => {
    return githubLabels
      .filter(({color}) => color.toLowerCase() !== AMOUNT_COLOR)
      .map(({color, name}) => <Label color={color} key={name} name={name} />);
  };

  return (
    <div className={clsx('Task', className)} key={htmlUrl}>
      <div className="Task__left">
        <A href={htmlUrl}>{title}</A>
        {renderStandardLabels()}
      </div>
      <div className="Task__middle">{renderAssignees()}</div>
      <div className="Task__right">{renderAmount()}</div>
    </div>
  );
};

export default Task;
