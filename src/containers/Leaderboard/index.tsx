import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const promises = REPOSITORIES.map((repositoryName) =>
        axios.get(`https://api.github.com/repos/thenewboston-developers/${repositoryName}/contributors`),
      );
      try {
        const responses = await Promise.all(promises);
        const results = responses
          .reduce((acc: Contributor[], cur) => [...acc, ...cur.data], [])
          .filter((contributor) => contributor.type === 'User');
        setContributors(results);
      } catch (e) {
        setError(e);
      }
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
    return Object.values(formattedContributors).map(({avatar_url, id, login}) => (
      <div className="Leaderboard__contributor" key={id}>
        <img className="Leaderboard__user-avatar" src={avatar_url} alt={login} />
      </div>
    ));
  };

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
        <div className="Leaderboard__contributor-list">{renderContributorList()}</div>
      </div>
    </div>
  );
};

export default Leaderboard;
