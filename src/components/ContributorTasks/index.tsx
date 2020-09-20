import React, {FC} from 'react';
import clsx from 'clsx';
import format from 'date-fns/format';

import {FormattedTask} from 'types/github';
import './ContributorTasks.scss';

interface ComponentProps {
  className?: string;
  tasks: FormattedTask[];
}

const ContributorTasks: FC<ComponentProps> = ({className, tasks}) => {
  const renderRows = () => {
    return tasks.map(({amount_paid, completed_date, repository, title}: FormattedTask, index) => (
      <tr key={index}>
        <td className="ContributorTasks__task-title">{title}</td>
        <td className="ContributorTasks__repository">{repository}</td>
        <td className="ContributorTasks__date-completed">{format(completed_date, 'L/d/yy')}</td>
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
