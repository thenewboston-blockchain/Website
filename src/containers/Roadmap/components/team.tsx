import React, {FC} from 'react';

import Task, {TaskObj} from './task';

import './team.scss';

interface ComponentProps {
  data: {[key: string]: TaskObj};
  teamName: string;
  color: string;
}

const Team: FC<ComponentProps> = ({data, teamName, color}) => {
  if (!Boolean(data)) return null;

  return (
    <div className="flex-row team-row">
      <div className="team-name">
        <span>{teamName}</span>
      </div>
      <div className="team-tasks">
        {Object.keys(data).map((key) => (
          <Task key={key} task={data[key]} color={color} />
        ))}
      </div>
    </div>
  );
};

export default Team;
