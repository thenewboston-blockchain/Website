import React, {useMemo} from 'react';

import Team from 'containers/Roadmap/Team';

import './Teams.scss';

import roadmapData from './roadmap-data.json';

const colors = ['#d30c15', '#2462e7', '#108118', '#212121'];

const Teams = () => {
  const _roadmapData = JSON.parse(JSON.stringify(roadmapData));

  const getTeamColor = useMemo(
    () => (index: number) => {
      const colorIndex = index % colors.length;
      return colors[colorIndex];
    },
    [],
  );

  return (
    <div className="Teams">
      {Object.keys(_roadmapData).map((key: string, index: number) => (
        <Team key={index} data={_roadmapData[key]} teamName={key} color={getTeamColor(index)} />
      ))}
    </div>
  );
};

export default Teams;
