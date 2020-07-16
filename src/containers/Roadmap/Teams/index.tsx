import React, {useMemo} from 'react';

import Team from 'containers/Roadmap/Team';

import './Teams.scss';

import roadmapData from './roadmap-data.json';

const colors = ['#d30c15', '#2462e7', '#108118', '#212121'];

const Teams = () => {
  let totalItemsRendered = 0;

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
      {Object.keys(_roadmapData).map((key: string, i: number) => {
        const chunkSize = Object.keys(_roadmapData[key]).length;
        totalItemsRendered += chunkSize;
        const rowStart = totalItemsRendered - chunkSize;
        return <Team color={getTeamColor(i)} data={_roadmapData[key]} key={i} rowStart={rowStart} teamName={key} />;
      })}
    </div>
  );
};

export default Teams;
