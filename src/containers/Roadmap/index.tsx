import React, {CSSProperties, FC, Fragment, ReactNode} from 'react';
import clsx from 'clsx';

import roadmapData from './roadmap-data.json';
import './Roadmap.scss';

const taskColors = [
  {background: '#4099FE', color: '#FFF'},
  {background: '#FFCE78', color: '#000'},
  {background: '#59D7D8', color: '#000'},
  {background: '#FF8180', color: '#000'},
];

const Roadmap: FC = () => {
  const renderQuarters = (): ReactNode => {
    return ['Q1', 'Q2', 'Q3', 'Q4'].map((quarter) => (
      <div className={clsx('Roadmap__header', `Roadmap__header--${quarter.toLowerCase()}`)} key={quarter}>
        <div className="Roadmap__circle">{quarter}</div>
      </div>
    ));
  };

  const renderTeams = (): ReactNode => {
    return Object.entries(roadmapData).map(([teamName, teamData], teamIndex) => {
      const rowCount = teamData.length;

      return (
        <Fragment key={teamName}>
          <div className="Roadmap__team" style={{gridRowEnd: `span ${rowCount || 1}`}}>
            {teamName}
          </div>
          {teamData.map(({taskName, taskCards}, taskIndex) => {
            const altBg = (teamIndex + taskIndex) % 2 === 0;
            return (
              <Fragment key={taskName}>
                <div className={clsx('Roadmap__task Roadmap__cell', {'Roadmap__cell--alt-bg': altBg})}>
                  {taskName}
                  {taskCards.map(({description, start, stop}, taskIndex) => {
                    const taskColor = taskColors[teamIndex];
                    const cardSize = stop - start;
                    const cardStyle: CSSProperties = {
                      background: taskColor.background,
                      color: taskColor.color,
                      left: `${100 * start}%`,
                      width: `${100 * cardSize}%`,
                    };
                    return (
                      <div className="Roadmap__card" key={taskIndex} style={cardStyle}>
                        {description || ''}
                      </div>
                    );
                  })}
                </div>
                <div className={clsx('Roadmap__cell', {'Roadmap__cell--alt-bg': altBg})} />
                <div className={clsx('Roadmap__cell', {'Roadmap__cell--alt-bg': altBg})} />
                <div className={clsx('Roadmap__cell', {'Roadmap__cell--alt-bg': altBg})} />
                <div className={clsx('Roadmap__cell', {'Roadmap__cell--alt-bg': altBg})} />
              </Fragment>
            );
          })}
        </Fragment>
      );
    });
  };

  return (
    <div className="Roadmap">
      <div className="Roadmap__empty-cell" />
      {renderQuarters()}
      {renderTeams()}
    </div>
  );
};

export default Roadmap;
