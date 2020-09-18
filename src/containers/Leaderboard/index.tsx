import React from 'react';

import './Leaderboard.scss';

const REPOSITORIES = ['Account-Manager', 'Bank', 'thenewboston-python', 'Validator', 'Website'];
const REPOSITORY_FILTERS = ['All', ...REPOSITORIES];

const Leaderboard = () => {
  const renderRepositoryFilters = () => {
    return REPOSITORY_FILTERS.map((option) => (
      <div className="Leaderboard__repository-filter-option" key={option}>
        {option}
      </div>
    ));
  };

  return (
    <div className="Leaderboard">
      <div className="Leaderboard__time-filter">7d 30d All</div>
      <div className="Leaderboard__main-content">
        <div className="Leaderboard__repository-filter">{renderRepositoryFilters()}</div>
        <div className="Leaderboard__contributor-list">contributor list</div>
      </div>
    </div>
  );
};

export default Leaderboard;
