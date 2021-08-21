import React, {FC} from 'react';

import {ProgressBar} from 'components';
import {RoadmapTask} from 'types/roadmap';
import StatusLabel from '../StatusLabel';

import './TeamRoadmapCard.scss';

type Props = {
  percentage: number;
  title: string;
  tasks: RoadmapTask[];
};

const TeamRoadmapCard: FC<Props> = ({percentage, tasks, title}) => {
  return (
    <div className="TeamRoadmapCard">
      <div className="TeamRoadmapCard__header">
        <h1 className="TeamRoadmapCard__header-title">{title}</h1>
        <div className="TeamRoadmapCard__header-progress">
          <ProgressBar className="TeamRoadmapCard__header-progress-bar" percentage={percentage} />
          <div className="TeamRoadmapCard__header-progress-percentage">{percentage}% complete</div>
        </div>
      </div>
      <div className="TeamRoadmapCard__content">
        {tasks.map((task) => {
          return (
            <div className="TeamRoadmapCard__content-task" key={task.pk}>
              <h3 className="TeamRoadmapCard__content-task-title">{task.task_title}</h3>
              <h3 className="TeamRoadmapCard__content-task-date">
                Expected delivery date: {task.estimated_completion_date}
              </h3>
              <StatusLabel isCompleted={task.is_complete} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamRoadmapCard;
