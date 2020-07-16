import React, {FC} from 'react';

import Task, {ITask} from 'containers/Roadmap/Task';

import './Team.scss';

interface ComponentProps {
  color: string;
  data: {[key: string]: ITask};
  rowStart: number;
  teamName: string;
}

const Team: FC<ComponentProps> = ({color, data, rowStart, teamName}) => {
  let rowNumber = rowStart;

  if (!Boolean(data)) return null;

  return (
    <div className="flex-row Team">
      <div className="team-name">
        <span>{teamName}</span>
      </div>
      <div className="team-tasks">
        {Object.keys(data).map((key) => {
          rowNumber += 1;
          return <Task color={color} key={key} rowNumber={rowNumber} task={data[key]} />;
        })}
      </div>
    </div>
  );
};

export default Team;
