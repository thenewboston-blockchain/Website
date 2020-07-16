import React, {FC, useMemo} from 'react';

import './Task.scss';

export interface ITask {
  task_name: string;
  task_range: {
    start: number;
    stop: number;
  };
}

interface ComponentProps {
  color: string;
  rowNumber: number;
  task: ITask;
}

const quarterNum = 4;

const Task: FC<ComponentProps> = ({color, rowNumber, task}) => {
  const progressStateStyle = useMemo(() => {
    const {
      task_range: {start, stop},
    } = task;

    const percentage = (100 * (stop - start)) / quarterNum;
    const marginLeft = (100 * start) / quarterNum;

    return {backgroundColor: color, marginLeft: `${marginLeft}%`, width: `${percentage}%`};
  }, [task, color]);

  if (!Boolean(task)) return null;

  return (
    <div className={`flex-row task-row row-${rowNumber} ${rowNumber % 2 !== 0 ? 'dark' : ''}`}>
      <div className="task-name">
        <span>{task.task_name}</span>
      </div>
      <div className="flex-row task-range">
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="flex-row align-items-center task-progress-row">
          <div className="task-current-state" style={progressStateStyle} />
        </div>
      </div>
    </div>
  );
};

export default Task;
