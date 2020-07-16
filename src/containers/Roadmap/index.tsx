import React, {useMemo} from 'react';

import Quarters from './Quarters';
import Team from './Team';

import roadmapData from './roadmap-data.json';

import './Roadmap.scss';

const colors = ['#d30c15', '#2462e7', '#108118', '#212121'];

const Roadmap = () => {
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
    <div className="Roadmap">
      <div className="roadmap-wrapper">
        <Quarters />
        <div className="teams">
          {Object.keys(_roadmapData).map((key: string, i: number) => {
            const chunkSize = Object.keys(_roadmapData[key]).length;
            totalItemsRendered += chunkSize;
            const rowStart = totalItemsRendered - chunkSize;
            return <Team color={getTeamColor(i)} data={_roadmapData[key]} key={i} rowStart={rowStart} teamName={key} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
