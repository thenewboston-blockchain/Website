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
      title: <span className="ContributorTasks__table-header">Recent Task</span>,
    };

    const taskRows = [
      {
        amount: 25000,
        title: 'Tab responsiveness',
      },
      {
        amount: 50000,
        title: 'When points are sent to friend the from sender account balance should get reduced',
      },
      {
        amount: 500,
        title: "Create Jest Tests for 'formatPath' and 'formatPathFromNode'",
      },
      {
        amount: 30000,
        title: 'Import and export entire account manager profile',
      },
      {
        amount: 20000,
        title: 'Import/export signing keys',
      },
    ].map(({amount, title}) => ({
      amount: <div className="ContributorTasks__amount">+ {amount.toLocaleString()}</div>,
      title: <span className="ContributorTasks__task-title">{title}</span>,
    }));

    return [headerRow, ...taskRows].map(({amount, title}) => [title, amount]);
  };

  return <TableVertical altColors className={clsx('ContributorTasks', className)} rows={getRecentTaskRows()} />;
};

export default ContributorTasks;
