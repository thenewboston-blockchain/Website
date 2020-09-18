import React, {FC} from 'react';
import clsx from 'clsx';

import './ContributorTasks.scss';

interface ComponentProps {
  className?: string;
}

const ContributorTasks: FC<ComponentProps> = ({className}) => {
  const renderRows = () => {
    const taskRows = [
      {
        amount: 25000,
        dateCompleted: '6/19/2020',
        repository: 'Account-Manager',
        title: 'Tab responsiveness',
      },
      {
        amount: 50000,
        dateCompleted: '6/19/2020',
        repository: 'Validator',
        title: 'When points are sent to friend the from sender account balance should get reduced',
      },
      {
        amount: 500,
        dateCompleted: '6/19/2020',
        repository: 'Account-Manager',
        title: "Create Jest Tests for 'formatPath' and 'formatPathFromNode'",
      },
    ];
    return taskRows.map(({amount, dateCompleted, repository, title}) => (
      <tr>
        <td className="ContributorTasks__task-title">{title}</td>
        <td className="ContributorTasks__repository">{repository}</td>
        <td className="ContributorTasks__date-completed">{dateCompleted}</td>
        <td className="ContributorTasks__amount">+ {amount.toLocaleString()}</td>
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
