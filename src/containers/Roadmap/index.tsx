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
      <div className={clsx('header', quarter.toLowerCase())} key={quarter}>
        <div className="header__circle">{quarter}</div>
      </div>
    ));
  };

  const renderTeams = (): ReactNode => {
    return Object.entries(roadmapData).map(([teamName, teamData], teamIndex) => {
      const rowCount = teamData.length;

      return (
        <Fragment key={teamName}>
          <div className="team" style={{gridRowEnd: `span ${rowCount || 1}`}}>
            {teamName}
          </div>
          {teamData.map(({taskName, taskCards}, taskIndex) => {
            const altBg = (teamIndex + taskIndex) % 2 === 0;
            return (
              <Fragment key={taskName}>
                <div className={clsx('task cell', {'alt-bg': altBg})}>
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
                      <div className="card" key={taskIndex} style={cardStyle}>
                        {description || ''}
                      </div>
                    );
                  })}
                </div>
                <div className={clsx('quarter q1 cell', {'alt-bg': altBg})} />
                <div className={clsx('quarter q2 cell', {'alt-bg': altBg})} />
                <div className={clsx('quarter q3 cell', {'alt-bg': altBg})} />
                <div className={clsx('quarter q4 cell', {'alt-bg': altBg})} />
              </Fragment>
            );
          })}
        </Fragment>
      );
    });
  };

  return (
    <div className="Documentation">
      <div className="Roadmap app-container">
        <div className="empty-cell" />
        {renderQuarters()}
        {renderTeams()}
      </div>
    </div>
  );
};

export default Roadmap;
