import React, {FC} from 'react';

import Task, {TaskObj} from 'containers/Roadmap/Task';

import './Team.scss';

interface ComponentProps {
  color: string;
  data: {[key: string]: TaskObj};
  teamName: string;
}

const Team: FC<ComponentProps> = ({data, teamName, color}) => {
  if (!Boolean(data)) return null;

  return (
    <div className="flex-row Team">
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
