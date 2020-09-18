import React, {useEffect, useState} from 'react';
import axios from 'axios';
import clsx from 'clsx';

import {A, ContributorTasks, CopyableAccountNumber, Qr} from 'components';
import './Leaderboard.scss';

const REPOSITORIES = ['Account-Manager', 'Bank', 'thenewboston-python', 'Validator', 'Website'];
const REPOSITORY_FILTERS = ['All', ...REPOSITORIES];

interface Contributor {
  avatar_url: string;
  contributions: number;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

const Leaderboard = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const promises = REPOSITORIES.map((repositoryName) =>
        axios.get(`https://api.github.com/repos/thenewboston-developers/${repositoryName}/contributors`),
      );
      const responses = await Promise.all(promises);
      const results = responses
        .reduce((acc: Contributor[], cur) => [...acc, ...cur.data], [])
        .filter((contributor) => contributor.type === 'User');
      setContributors(results);
    };
    fetchData();
  }, []);

  const getFormattedContributors = () => {
    const results: any = {};

    contributors.forEach((contributor) => {
      if (contributor.id in results) {
        results[contributor.id].contributions += contributor.contributions;
      } else {
        results[contributor.id] = contributor;
      }
    });

    return results;
  };

  const renderContributorList = () => {
    if (!contributors.length) return null;
    const formattedContributors: object = getFormattedContributors();
    return Object.values(formattedContributors).map(({avatar_url, html_url, id, login}, index) => (
      <div className="Leaderboard__contributor" key={id}>
        <div className="Leaderboard__rank">#{index + 1}</div>
        <div>
          <img className="Leaderboard__user-avatar" src={avatar_url} alt={login} />
        </div>
        <div className="Leaderboard__user-details">
          <A className="Leaderboard__user-login" href={html_url}>
            {login}
          </A>
          <CopyableAccountNumber
            accountNumber="dfddf07ec15cbf363ecb52eedd7133b70b3ec896b488460bcecaba63e8e36be5"
            className="Leaderboard__CopyableAccountNumber"
          />
          <div className="Leaderboard__qr-container">
            <Qr text="dfddf07ec15cbf363ecb52eedd7133b70b3ec896b488460bcecaba63e8e36be5" width={100} />
          </div>
        </div>
        <ContributorTasks className="Leaderboard__ContributorTasks" />
        <div className="Leaderboard__total-points">
          <div className="Leaderboard__total-points-label">Total Points Earned</div>
          <div className="Leaderboard__total-points-value">{(1876500).toLocaleString()}</div>
        </div>
      </div>
    ));
  };

  const renderRepositoryFilters = () => {
    return REPOSITORY_FILTERS.map((option) => (
      <div
        className={clsx('Leaderboard__repository-filter-option', {
          'Leaderboard__repository-filter-option--active': option === 'All',
        })}
        key={option}
      >
        {option}
      </div>
    ));
  };

  return (
    <div className="Leaderboard">
      <div className="Leaderboard__time-filter">
        <span className="Leaderboard__time-filter-option">7d</span>
        <span className="Leaderboard__time-filter-option Leaderboard__time-filter-option--active">30d</span>
        <span className="Leaderboard__time-filter-option">All</span>
      </div>
      <div className="Leaderboard__main-content">
        <div className="Leaderboard__repository-filter">{renderRepositoryFilters()}</div>
        <div className="Leaderboard__contributor-list">{renderContributorList()}</div>
      </div>
    </div>
  );
};

export default Leaderboard;
