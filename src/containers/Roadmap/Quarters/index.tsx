import React, {useMemo} from 'react';

import './Quarters.scss';

const Quarters = () => {
  const renderQuarter = useMemo(
    () => (quarter: string, index: number) => (
      <div key={index} className={`flex-1 quarter ${quarter.toLowerCase()}`}>
        <div className="arrow" />
        <div className="quarter-circle">
          <span className="quarter-name">{quarter}</span>
        </div>
      </div>
    ),
    [],
  );

  return (
    <div className="Quarters">
      <div className="flex-1" />
      <div className="flex-row quarters-row">
        <div className="flex-1" />
        {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter, index) => renderQuarter(quarter, index))}
      </div>
    </div>
  );
};

export default Quarters;
