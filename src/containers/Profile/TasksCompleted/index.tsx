import React, {FC} from 'react';
import clsx from 'clsx';

import {ContributorTasks, EmptyPage, TotalAmount} from 'components';
import {useWindowDimensions} from 'hooks';
import {Task} from 'types/github';
import {getTasks} from 'utils/data';

import './TasksCompleted.scss';

interface ComponentProps {
  github_username: string;
}

const TasksCompleted: FC<ComponentProps> = ({github_username}) => {
  const {width} = useWindowDimensions();

  const getCompletedTasks = () => {
    const tasks = getTasks();
    return tasks[github_username];
  };

  const getTotalEarnings = (tasks: Task[]) => {
    const amounts = tasks.map(({amount_paid}: Task) => parseInt(amount_paid, 10));
    return amounts.reduce((a, b) => a + b, 0);
  };

  const completedTasks = getCompletedTasks();
  const totalEarnings = completedTasks ? getTotalEarnings(completedTasks) : 0;
  const totalTasks = completedTasks ? completedTasks.length : 0;

  const renderMobileTasks = () => {
    return (
      <>
        <div className="TasksCompleted__totals">
          <TotalAmount amount={totalTasks} className="TasksCompleted__TotalTasks" title="Total Tasks" />
          <TotalAmount amount={totalEarnings} className="TasksCompleted__TotalEarnings" title="Total Earnings" />
        </div>
        <ContributorTasks className="TasksCompleted__ContributorTasks" tasks={completedTasks} />
      </>
    );
  };

  const renderTasks = () => {
    return (
      <>
        <ContributorTasks className="TasksCompleted__ContributorTasks" tasks={completedTasks} />
        <TotalAmount amount={totalEarnings} className="TotalEarnings" title="Total Earnings" />
      </>
    );
  };

  return (
    <div className="TasksCompleted">
      <h2 className="TasksCompleted__title">Tasks Completed</h2>
      <div className={clsx('TasksCompleted__tasks', {'TasksCompleted__tasks--empty': totalTasks <= 0})}>
        {totalTasks > 0 && (width > 480 ? renderTasks() : renderMobileTasks())}
        {totalTasks <= 0 && <EmptyPage className="TasksCompleted__empty-page" />}
      </div>
    </div>
  );
};

export default TasksCompleted;
