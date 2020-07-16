import React, {useMemo} from 'react';

import './quarters.scss';

const quarterCircleDimention = 75;

const Quarters = () => {
  const arrowStyle = useMemo(
    () => ({width: `calc(100% - ${quarterCircleDimention}px)`, left: `calc(50% + ${quarterCircleDimention / 2}px)`}),
    [],
  );
  const circleStyle = useMemo(
    () => ({width: `${quarterCircleDimention}px`, height: `${quarterCircleDimention}px`}),
    [],
  );
  const renderQuater = useMemo(
    () => (quater: string, index: number) => (
      <div key={index} className="flex-1 quarter">
        <div className="arrow" style={arrowStyle}></div>
        <div className="quarter-circle" style={circleStyle}>
          <span className="quarter-name">{quater}</span>
        </div>
      </div>
    ),
    [arrowStyle, circleStyle],
  );
  return (
    <div className="flex-row align-items-center quarters-row">
      <div className="flex-1"></div>
      {['Q1', 'Q2', 'Q3', 'Q4'].map((quater, index) => renderQuater(quater, index))}
    </div>
  );
};

export default Quarters;
