import React, {FC} from 'react';
import clsx from 'clsx';

import {TableVertical} from 'components/Table';

import './ContributorTasks.scss';

interface ComponentProps {
  className?: string;
}

const ContributorTasks: FC<ComponentProps> = ({className}) => {
  const getRecentTaskRows = () => {
    const headerRow = {
      amount: (
        <div className="ContributorTasks__amount-header">
          <span className="ContributorTasks__table-header">Amount</span>
        </div>
      ),
      dateCompleted: <span className="ContributorTasks__table-header">Completed</span>,
      repository: <span className="ContributorTasks__table-header">Repository</span>,
      title: <span className="ContributorTasks__table-header">Recent Task</span>,
    };

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
      {
        amount: 30000,
        dateCompleted: '6/19/2020',
        repository: 'Bank',
        title: 'Import and export entire account manager profile',
      },
      {
        amount: 20000,
        dateCompleted: '6/19/2020',
        repository: 'Account-Manager',
        title: 'Import/export signing keys',
      },
    ].map(({amount, dateCompleted, repository, title}) => ({
      amount: <div className="ContributorTasks__amount">+ {amount.toLocaleString()}</div>,
      dateCompleted: <span className="ContributorTasks__date-completed">{dateCompleted}</span>,
      repository: <span className="ContributorTasks__repository">{repository}</span>,
      title: <span className="ContributorTasks__task-title">{title}</span>,
    }));

    return [headerRow, ...taskRows].map(({amount, dateCompleted, repository, title}) => [
      title,
      repository,
      dateCompleted,
      amount,
    ]);
  };

  return <TableVertical altColors className={clsx('ContributorTasks', className)} rows={getRecentTaskRows()} />;
};

export default ContributorTasks;
