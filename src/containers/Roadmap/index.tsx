import React, {useMemo} from 'react';

import Quarters from './Quarters';
import Team from './Team';

import './Roadmap.scss';

import data from './sample.json';

const colors = ['#d30c15', '#2462e7', '#108118', '#212121'];

const Roadmap = () => {
  const _data = JSON.parse(JSON.stringify(data));

  const getTeamColor = useMemo(
    () => (index: number) => {
      const colorIndex = index % colors.length;
      return colors[colorIndex];
    },
    [],
  );

  return (
    <div className="Roadmap">
      <div className="flex-row">
        <div className="flex-1" />
        <Quarters />
      </div>
      <div className="teams">
        {Object.keys(_data).map((key: string, index: number) => (
          <Team key={index} data={_data[key]} teamName={key} color={getTeamColor(index)} />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
