import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {A, CopyableAccountNumber, Qr, TableVertical} from 'components';
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

const TEMP_ISSUES = [
  {
    url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/issues/289',
    repository_url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager',
    labels_url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/issues/289/labels{/name}',
    comments_url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/issues/289/comments',
    events_url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/issues/289/events',
    html_url: 'https://github.com/thenewboston-developers/Account-Manager/issues/289',
    id: 702217689,
    node_id: 'MDU6SXNzdWU3MDIyMTc2ODk=',
    number: 289,
    title: ' Tab responsiveness',
    user: {
      login: 'kristykjlee',
      id: 68207101,
      node_id: 'MDQ6VXNlcjY4MjA3MTAx',
      avatar_url: 'https://avatars1.githubusercontent.com/u/68207101?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/kristykjlee',
      html_url: 'https://github.com/kristykjlee',
      followers_url: 'https://api.github.com/users/kristykjlee/followers',
      following_url: 'https://api.github.com/users/kristykjlee/following{/other_user}',
      gists_url: 'https://api.github.com/users/kristykjlee/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/kristykjlee/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/kristykjlee/subscriptions',
      organizations_url: 'https://api.github.com/users/kristykjlee/orgs',
      repos_url: 'https://api.github.com/users/kristykjlee/repos',
      events_url: 'https://api.github.com/users/kristykjlee/events{/privacy}',
      received_events_url: 'https://api.github.com/users/kristykjlee/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [
      {
        id: 2218976336,
        node_id: 'MDU6TGFiZWwyMjE4OTc2MzM2',
        url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/labels/design',
        name: 'design',
        color: 'd4c5f9',
        default: false,
        description: '',
      },
    ],
    state: 'open',
    locked: false,
    assignee: {
      login: 'kristykjlee',
      id: 68207101,
      node_id: 'MDQ6VXNlcjY4MjA3MTAx',
      avatar_url: 'https://avatars1.githubusercontent.com/u/68207101?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/kristykjlee',
      html_url: 'https://github.com/kristykjlee',
      followers_url: 'https://api.github.com/users/kristykjlee/followers',
      following_url: 'https://api.github.com/users/kristykjlee/following{/other_user}',
      gists_url: 'https://api.github.com/users/kristykjlee/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/kristykjlee/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/kristykjlee/subscriptions',
      organizations_url: 'https://api.github.com/users/kristykjlee/orgs',
      repos_url: 'https://api.github.com/users/kristykjlee/repos',
      events_url: 'https://api.github.com/users/kristykjlee/events{/privacy}',
      received_events_url: 'https://api.github.com/users/kristykjlee/received_events',
      type: 'User',
      site_admin: false,
    },
    assignees: [
      {
        login: 'kristykjlee',
        id: 68207101,
        node_id: 'MDQ6VXNlcjY4MjA3MTAx',
        avatar_url: 'https://avatars1.githubusercontent.com/u/68207101?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/kristykjlee',
        html_url: 'https://github.com/kristykjlee',
        followers_url: 'https://api.github.com/users/kristykjlee/followers',
        following_url: 'https://api.github.com/users/kristykjlee/following{/other_user}',
        gists_url: 'https://api.github.com/users/kristykjlee/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/kristykjlee/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/kristykjlee/subscriptions',
        organizations_url: 'https://api.github.com/users/kristykjlee/orgs',
        repos_url: 'https://api.github.com/users/kristykjlee/repos',
        events_url: 'https://api.github.com/users/kristykjlee/events{/privacy}',
        received_events_url: 'https://api.github.com/users/kristykjlee/received_events',
        type: 'User',
        site_admin: false,
      },
    ],
    milestone: null,
    comments: 0,
    created_at: '2020-09-15T19:59:15Z',
    updated_at: '2020-09-15T19:59:15Z',
    closed_at: null,
    author_association: 'NONE',
    active_lock_reason: null,
    body: '',
    performed_via_github_app: null,
  },
  {
    url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/issues/284',
    repository_url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager',
    labels_url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/issues/284/labels{/name}',
    comments_url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/issues/284/comments',
    events_url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/issues/284/events',
    html_url: 'https://github.com/thenewboston-developers/Account-Manager/issues/284',
    id: 700874854,
    node_id: 'MDU6SXNzdWU3MDA4NzQ4NTQ=',
    number: 284,
    title: 'Add Guide/API doc per tab (bank)?',
    user: {
      login: 'kristykjlee',
      id: 68207101,
      node_id: 'MDQ6VXNlcjY4MjA3MTAx',
      avatar_url: 'https://avatars1.githubusercontent.com/u/68207101?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/kristykjlee',
      html_url: 'https://github.com/kristykjlee',
      followers_url: 'https://api.github.com/users/kristykjlee/followers',
      following_url: 'https://api.github.com/users/kristykjlee/following{/other_user}',
      gists_url: 'https://api.github.com/users/kristykjlee/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/kristykjlee/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/kristykjlee/subscriptions',
      organizations_url: 'https://api.github.com/users/kristykjlee/orgs',
      repos_url: 'https://api.github.com/users/kristykjlee/repos',
      events_url: 'https://api.github.com/users/kristykjlee/events{/privacy}',
      received_events_url: 'https://api.github.com/users/kristykjlee/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [
      {
        id: 2218976336,
        node_id: 'MDU6TGFiZWwyMjE4OTc2MzM2',
        url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/labels/design',
        name: 'design',
        color: 'd4c5f9',
        default: false,
        description: '',
      },
    ],
    state: 'open',
    locked: false,
    assignee: {
      login: 'kristykjlee',
      id: 68207101,
      node_id: 'MDQ6VXNlcjY4MjA3MTAx',
      avatar_url: 'https://avatars1.githubusercontent.com/u/68207101?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/kristykjlee',
      html_url: 'https://github.com/kristykjlee',
      followers_url: 'https://api.github.com/users/kristykjlee/followers',
      following_url: 'https://api.github.com/users/kristykjlee/following{/other_user}',
      gists_url: 'https://api.github.com/users/kristykjlee/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/kristykjlee/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/kristykjlee/subscriptions',
      organizations_url: 'https://api.github.com/users/kristykjlee/orgs',
      repos_url: 'https://api.github.com/users/kristykjlee/repos',
      events_url: 'https://api.github.com/users/kristykjlee/events{/privacy}',
      received_events_url: 'https://api.github.com/users/kristykjlee/received_events',
      type: 'User',
      site_admin: false,
    },
    assignees: [
      {
        login: 'kristykjlee',
        id: 68207101,
        node_id: 'MDQ6VXNlcjY4MjA3MTAx',
        avatar_url: 'https://avatars1.githubusercontent.com/u/68207101?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/kristykjlee',
        html_url: 'https://github.com/kristykjlee',
        followers_url: 'https://api.github.com/users/kristykjlee/followers',
        following_url: 'https://api.github.com/users/kristykjlee/following{/other_user}',
        gists_url: 'https://api.github.com/users/kristykjlee/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/kristykjlee/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/kristykjlee/subscriptions',
        organizations_url: 'https://api.github.com/users/kristykjlee/orgs',
        repos_url: 'https://api.github.com/users/kristykjlee/repos',
        events_url: 'https://api.github.com/users/kristykjlee/events{/privacy}',
        received_events_url: 'https://api.github.com/users/kristykjlee/received_events',
        type: 'User',
        site_admin: false,
      },
    ],
    milestone: null,
    comments: 0,
    created_at: '2020-09-14T08:05:12Z',
    updated_at: '2020-09-14T08:05:12Z',
    closed_at: null,
    author_association: 'NONE',
    active_lock_reason: null,
    body: '',
    performed_via_github_app: null,
  },
  {
    url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/issues/283',
    repository_url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager',
    labels_url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/issues/283/labels{/name}',
    comments_url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/issues/283/comments',
    events_url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/issues/283/events',
    html_url: 'https://github.com/thenewboston-developers/Account-Manager/issues/283',
    id: 700874472,
    node_id: 'MDU6SXNzdWU3MDA4NzQ0NzI=',
    number: 283,
    title: 'Empty states for all bank tabs',
    user: {
      login: 'kristykjlee',
      id: 68207101,
      node_id: 'MDQ6VXNlcjY4MjA3MTAx',
      avatar_url: 'https://avatars1.githubusercontent.com/u/68207101?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/kristykjlee',
      html_url: 'https://github.com/kristykjlee',
      followers_url: 'https://api.github.com/users/kristykjlee/followers',
      following_url: 'https://api.github.com/users/kristykjlee/following{/other_user}',
      gists_url: 'https://api.github.com/users/kristykjlee/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/kristykjlee/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/kristykjlee/subscriptions',
      organizations_url: 'https://api.github.com/users/kristykjlee/orgs',
      repos_url: 'https://api.github.com/users/kristykjlee/repos',
      events_url: 'https://api.github.com/users/kristykjlee/events{/privacy}',
      received_events_url: 'https://api.github.com/users/kristykjlee/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [
      {
        id: 2218976336,
        node_id: 'MDU6TGFiZWwyMjE4OTc2MzM2',
        url: 'https://api.github.com/repos/thenewboston-developers/Account-Manager/labels/design',
        name: 'design',
        color: 'd4c5f9',
        default: false,
        description: '',
      },
    ],
    state: 'open',
    locked: false,
    assignee: {
      login: 'kristykjlee',
      id: 68207101,
      node_id: 'MDQ6VXNlcjY4MjA3MTAx',
      avatar_url: 'https://avatars1.githubusercontent.com/u/68207101?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/kristykjlee',
      html_url: 'https://github.com/kristykjlee',
      followers_url: 'https://api.github.com/users/kristykjlee/followers',
      following_url: 'https://api.github.com/users/kristykjlee/following{/other_user}',
      gists_url: 'https://api.github.com/users/kristykjlee/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/kristykjlee/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/kristykjlee/subscriptions',
      organizations_url: 'https://api.github.com/users/kristykjlee/orgs',
      repos_url: 'https://api.github.com/users/kristykjlee/repos',
      events_url: 'https://api.github.com/users/kristykjlee/events{/privacy}',
      received_events_url: 'https://api.github.com/users/kristykjlee/received_events',
      type: 'User',
      site_admin: false,
    },
    assignees: [
      {
        login: 'kristykjlee',
        id: 68207101,
        node_id: 'MDQ6VXNlcjY4MjA3MTAx',
        avatar_url: 'https://avatars1.githubusercontent.com/u/68207101?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/kristykjlee',
        html_url: 'https://github.com/kristykjlee',
        followers_url: 'https://api.github.com/users/kristykjlee/followers',
        following_url: 'https://api.github.com/users/kristykjlee/following{/other_user}',
        gists_url: 'https://api.github.com/users/kristykjlee/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/kristykjlee/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/kristykjlee/subscriptions',
        organizations_url: 'https://api.github.com/users/kristykjlee/orgs',
        repos_url: 'https://api.github.com/users/kristykjlee/repos',
        events_url: 'https://api.github.com/users/kristykjlee/events{/privacy}',
        received_events_url: 'https://api.github.com/users/kristykjlee/received_events',
        type: 'User',
        site_admin: false,
      },
    ],
    milestone: null,
    comments: 0,
    created_at: '2020-09-14T08:04:35Z',
    updated_at: '2020-09-14T08:04:35Z',
    closed_at: null,
    author_association: 'NONE',
    active_lock_reason: null,
    body: '',
    performed_via_github_app: null,
  },
];

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
    return Object.values(formattedContributors).map(({avatar_url, html_url, id, login}) => (
      <div className="Leaderboard__contributor" key={id}>
        <div className="Leaderboard__rank">#1</div>
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
        <TableVertical altColors className="Leaderboard__recent-tasks" rows={getRecentTaskRows()} />
        <div className="Leaderboard__total-points">
          <div className="Leaderboard__total-points-label">Total Points Earned</div>
          <div className="Leaderboard__total-points-value">1,876,500</div>
        </div>
      </div>
    ));
  };

  const getRecentTaskRows = () => {
    return TEMP_ISSUES.map(({title}) => [title, '123']);
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
