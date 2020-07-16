import React, {useMemo} from 'react';

import './Quarters.scss';

const quarterCircleDimension = 75;

const Quarters = () => {
  const arrowStyle = useMemo(
    () => ({width: `calc(100% - ${quarterCircleDimension}px)`, left: `calc(50% + ${quarterCircleDimension / 2}px)`}),
    [],
  );

  const circleStyle = useMemo(
    () => ({width: `${quarterCircleDimension}px`, height: `${quarterCircleDimension}px`}),
    [],
  );

  const renderQuarter = useMemo(
    () => (quarter: string, index: number) => (
      <div key={index} className="flex-1 quarter">
        <div className="arrow" style={arrowStyle} />
        <div className="quarter-circle" style={circleStyle}>
          <span className="quarter-name">{quarter}</span>
        </div>
      </div>
    ),
    [arrowStyle, circleStyle],
  );

  return (
    <div className="flex-row Quarters">
      <div className="flex-1" />
      <div className="align-items-center flex-row quarters-row">
        <div className="flex-1" />
        {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter, index) => renderQuarter(quarter, index))}
      </div>
    </div>
  );
};

export default Quarters;
