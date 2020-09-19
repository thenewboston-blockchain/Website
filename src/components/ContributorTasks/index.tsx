import React, {FC} from 'react';
import clsx from 'clsx';

import {Task} from 'types/github';
import './ContributorTasks.scss';

interface ComponentProps {
  className?: string;
  tasks: Task[];
}

const ContributorTasks: FC<ComponentProps> = ({className, tasks}) => {
  const renderRows = () => {
    return tasks.map(({amount_paid, completed_date, repository, title}: Task, index) => (
      <tr key={index}>
        <td className="ContributorTasks__task-title">{title}</td>
        <td className="ContributorTasks__repository">{repository}</td>
        <td className="ContributorTasks__date-completed">{completed_date}</td>
        <td className="ContributorTasks__amount">+ {parseInt(amount_paid, 10).toLocaleString()}</td>
      </tr>
    ));
  };

  return (
    <table className={clsx('ContributorTasks', className)}>
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
  );
};

export default ContributorTasks;
