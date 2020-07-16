import React, {FC, useMemo} from 'react';

import './Task.scss';

export interface TaskObj {
  task_name: string;
  task_range: {
    start: number;
    stop: number;
  };
}

interface ComponentProps {
  task: TaskObj;
  color: string;
}

const quarterNum = 4;

const Task: FC<ComponentProps> = ({task, color}) => {
  const progressStateStyle = useMemo(() => {
    const {
      task_range: {start, stop},
    } = task;

    const percentage = (100 * (stop - start)) / quarterNum;
    const marginLeft = (100 * start) / quarterNum;

    return {width: `${percentage}%`, marginLeft: `${marginLeft}%`, backgroundColor: color};
  }, [task, color]);

  if (!Boolean(task)) return null;

  return (
    <div className="flex-row task-row">
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
