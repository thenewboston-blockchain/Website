import React, {FC} from 'react';
import clsx from 'clsx';
import format from 'date-fns/format';

import {A} from 'components';
import {Task} from 'types/github';
import './ContributorTasks.scss';

interface ComponentProps {
  className?: string;
  tasks: Task[];
}

const ContributorTasks: FC<ComponentProps> = ({className, tasks}) => {
  const renderRows = () => {
    return tasks.map(({amount_paid, completed_date, issue_id, repository, title}: Task, index) => (
      <tr key={index}>
        <td className="ContributorTasks__task-title" title={title}>
          <A
            className="ContributorTasks__issue-link"
            href={`https://github.com/thenewboston-developers/${repository}/issues/${issue_id}`}
          >
            {title}
          </A>
        </td>
        <td className="ContributorTasks__repository" title={repository}>
          {repository}
        </td>
        <td className="ContributorTasks__date-completed">{format(completed_date, 'L/d/yy')}</td>
        <td className="ContributorTasks__amount">+ {parseInt(amount_paid, 10).toLocaleString()}</td>
      </tr>
    ));
  };

  return (
    <div className={clsx('ContributorTasks', className)}>
      <table>
        <thead>
          <tr>
            <th>Recent Task</th>
            <th>Repository</th>
            <th>Completed</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default ContributorTasks;
