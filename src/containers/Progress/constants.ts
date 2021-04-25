import {Milestone, BaseIssue} from 'types/github';

/* eslint-disable */
export const dummyMilestone: Milestone = {
  url: 'https://api.github.com/repos/thenewboston-developers/Management/milestones/1',
  html_url: 'https://github.com/thenewboston-developers/Management/milestone/1',
  labels_url: 'https://api.github.com/repos/thenewboston-developers/Management/milestones/1/labels',
  id: 6645748,
  number: 1,
  title: 'Sprint 26',
  description:
    'The goal for this sprint is to set up the website API server and to redesign the landing page for the website.',
  open_issues: 3,
  closed_issues: 4,
  state: 'open',
  created_at: '2021-04-09T22:36:59Z',
  updated_at: '2021-04-14T17:04:47Z',
  due_on: '2021-04-13T07:00:00Z',
};

export const dummyIssues: BaseIssue[] = [
  {
    url: 'https://api.github.com/repos/thenewboston-developers/Management/issues/139',
    repository_url: 'https://api.github.com/repos/thenewboston-developers/Management',
    labels_url: 'https://api.github.com/repos/thenewboston-developers/Management/issues/139/labels{/name}',
    comments_url: 'https://api.github.com/repos/thenewboston-developers/Management/issues/139/comments',
    events_url: 'https://api.github.com/repos/thenewboston-developers/Management/issues/139/events',
    html_url: 'https://github.com/thenewboston-developers/Management/issues/139',
    id: 854143779,
    node_id: 'MDU6SXNzdWU4NTQxNDM3Nzk=',
    number: 139,
    title: 'Create NewRelic account',
    user: {
      login: 'buckyroberts',
      id: 8547538,
      node_id: 'MDQ6VXNlcjg1NDc1Mzg=',
      avatar_url: 'https://avatars.githubusercontent.com/u/8547538?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/buckyroberts',
      html_url: 'https://github.com/buckyroberts',
      followers_url: 'https://api.github.com/users/buckyroberts/followers',
      following_url: 'https://api.github.com/users/buckyroberts/following{/other_user}',
      gists_url: 'https://api.github.com/users/buckyroberts/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/buckyroberts/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/buckyroberts/subscriptions',
      organizations_url: 'https://api.github.com/users/buckyroberts/orgs',
      repos_url: 'https://api.github.com/users/buckyroberts/repos',
      events_url: 'https://api.github.com/users/buckyroberts/events{/privacy}',
      received_events_url: 'https://api.github.com/users/buckyroberts/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [
      {
        id: 2860514436,
        node_id: 'MDU6TGFiZWwyODYwNTE0NDM2',
        url: 'https://api.github.com/repos/thenewboston-developers/Management/labels/High%20Priority',
        name: 'High Priority',
        color: 'd93f0b',
        default: false,
        description: '',
      },
    ],
    state: 'closed',
    locked: false,
    assignee: {
      login: 'buckyroberts',
      id: 8547538,
      node_id: 'MDQ6VXNlcjg1NDc1Mzg=',
      avatar_url: 'https://avatars.githubusercontent.com/u/8547538?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/buckyroberts',
      html_url: 'https://github.com/buckyroberts',
      followers_url: 'https://api.github.com/users/buckyroberts/followers',
      following_url: 'https://api.github.com/users/buckyroberts/following{/other_user}',
      gists_url: 'https://api.github.com/users/buckyroberts/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/buckyroberts/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/buckyroberts/subscriptions',
      organizations_url: 'https://api.github.com/users/buckyroberts/orgs',
      repos_url: 'https://api.github.com/users/buckyroberts/repos',
      events_url: 'https://api.github.com/users/buckyroberts/events{/privacy}',
      received_events_url: 'https://api.github.com/users/buckyroberts/received_events',
      type: 'User',
      site_admin: false,
    },
    assignees: [
      {
        login: 'buckyroberts',
        id: 8547538,
        node_id: 'MDQ6VXNlcjg1NDc1Mzg=',
        avatar_url: 'https://avatars.githubusercontent.com/u/8547538?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/buckyroberts',
        html_url: 'https://github.com/buckyroberts',
        followers_url: 'https://api.github.com/users/buckyroberts/followers',
        following_url: 'https://api.github.com/users/buckyroberts/following{/other_user}',
        gists_url: 'https://api.github.com/users/buckyroberts/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/buckyroberts/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/buckyroberts/subscriptions',
        organizations_url: 'https://api.github.com/users/buckyroberts/orgs',
        repos_url: 'https://api.github.com/users/buckyroberts/repos',
        events_url: 'https://api.github.com/users/buckyroberts/events{/privacy}',
        received_events_url: 'https://api.github.com/users/buckyroberts/received_events',
        type: 'User',
        site_admin: false,
      },
    ],
    comments: 0,
    created_at: '2021-04-09T04:21:18Z',
    closed_at: '2021-04-14T17:04:42Z',
    body: 'Create a NewRelic account for the website and give @truyenhv access.',
  },
  {
    url: 'https://api.github.com/repos/thenewboston-developers/Management/issues/138',
    repository_url: 'https://api.github.com/repos/thenewboston-developers/Management',
    labels_url: 'https://api.github.com/repos/thenewboston-developers/Management/issues/138/labels{/name}',
    comments_url: 'https://api.github.com/repos/thenewboston-developers/Management/issues/138/comments',
    events_url: 'https://api.github.com/repos/thenewboston-developers/Management/issues/138/events',
    html_url: 'https://github.com/thenewboston-developers/Management/issues/138',
    id: 854065393,
    node_id: 'MDU6SXNzdWU4NTQwNjUzOTM=',
    number: 138,
    title: 'Backend for memo',
    user: {
      login: 'buckyroberts',
      id: 8547538,
      node_id: 'MDQ6VXNlcjg1NDc1Mzg=',
      avatar_url: 'https://avatars.githubusercontent.com/u/8547538?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/buckyroberts',
      html_url: 'https://github.com/buckyroberts',
      followers_url: 'https://api.github.com/users/buckyroberts/followers',
      following_url: 'https://api.github.com/users/buckyroberts/following{/other_user}',
      gists_url: 'https://api.github.com/users/buckyroberts/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/buckyroberts/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/buckyroberts/subscriptions',
      organizations_url: 'https://api.github.com/users/buckyroberts/orgs',
      repos_url: 'https://api.github.com/users/buckyroberts/repos',
      events_url: 'https://api.github.com/users/buckyroberts/events{/privacy}',
      received_events_url: 'https://api.github.com/users/buckyroberts/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [],
    state: 'closed',
    locked: false,
    assignee: {
      login: 'buckyroberts',
      id: 8547538,
      node_id: 'MDQ6VXNlcjg1NDc1Mzg=',
      avatar_url: 'https://avatars.githubusercontent.com/u/8547538?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/buckyroberts',
      html_url: 'https://github.com/buckyroberts',
      followers_url: 'https://api.github.com/users/buckyroberts/followers',
      following_url: 'https://api.github.com/users/buckyroberts/following{/other_user}',
      gists_url: 'https://api.github.com/users/buckyroberts/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/buckyroberts/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/buckyroberts/subscriptions',
      organizations_url: 'https://api.github.com/users/buckyroberts/orgs',
      repos_url: 'https://api.github.com/users/buckyroberts/repos',
      events_url: 'https://api.github.com/users/buckyroberts/events{/privacy}',
      received_events_url: 'https://api.github.com/users/buckyroberts/received_events',
      type: 'User',
      site_admin: false,
    },
    assignees: [
      {
        login: 'buckyroberts',
        id: 8547538,
        node_id: 'MDQ6VXNlcjg1NDc1Mzg=',
        avatar_url: 'https://avatars.githubusercontent.com/u/8547538?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/buckyroberts',
        html_url: 'https://github.com/buckyroberts',
        followers_url: 'https://api.github.com/users/buckyroberts/followers',
        following_url: 'https://api.github.com/users/buckyroberts/following{/other_user}',
        gists_url: 'https://api.github.com/users/buckyroberts/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/buckyroberts/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/buckyroberts/subscriptions',
        organizations_url: 'https://api.github.com/users/buckyroberts/orgs',
        repos_url: 'https://api.github.com/users/buckyroberts/repos',
        events_url: 'https://api.github.com/users/buckyroberts/events{/privacy}',
        received_events_url: 'https://api.github.com/users/buckyroberts/received_events',
        type: 'User',
        site_admin: false,
      },
    ],
    comments: 0,
    created_at: '2021-04-09T01:23:44Z',
    closed_at: '2021-04-11T22:45:30Z',
    body:
      'Write the backend for the memo feature on the alpha network.\r\n\r\nMocks - https://github.com/thenewboston-developers/Account-Manager/issues/613\r\n',
  },
  {
    url: 'https://api.github.com/repos/thenewboston-developers/Management/issues/139',
    repository_url: 'https://api.github.com/repos/thenewboston-developers/Management',
    labels_url: 'https://api.github.com/repos/thenewboston-developers/Management/issues/139/labels{/name}',
    comments_url: 'https://api.github.com/repos/thenewboston-developers/Management/issues/139/comments',
    events_url: 'https://api.github.com/repos/thenewboston-developers/Management/issues/139/events',
    html_url: 'https://github.com/thenewboston-developers/Management/issues/139',
    id: 854143779,
    node_id: 'MDU6SXNzdWU4NTQxNDM3Nzk=',
    number: 139,
    title: 'Create NewRelic account',
    user: {
      login: 'buckyroberts',
      id: 8547538,
      node_id: 'MDQ6VXNlcjg1NDc1Mzg=',
      avatar_url: 'https://avatars.githubusercontent.com/u/8547538?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/buckyroberts',
      html_url: 'https://github.com/buckyroberts',
      followers_url: 'https://api.github.com/users/buckyroberts/followers',
      following_url: 'https://api.github.com/users/buckyroberts/following{/other_user}',
      gists_url: 'https://api.github.com/users/buckyroberts/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/buckyroberts/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/buckyroberts/subscriptions',
      organizations_url: 'https://api.github.com/users/buckyroberts/orgs',
      repos_url: 'https://api.github.com/users/buckyroberts/repos',
      events_url: 'https://api.github.com/users/buckyroberts/events{/privacy}',
      received_events_url: 'https://api.github.com/users/buckyroberts/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [
      {
        id: 2860514436,
        node_id: 'MDU6TGFiZWwyODYwNTE0NDM2',
        url: 'https://api.github.com/repos/thenewboston-developers/Management/labels/High%20Priority',
        name: 'High Priority',
        color: 'd93f0b',
        default: false,
        description: '',
      },
    ],
    state: 'open',
    locked: false,
    assignee: {
      login: 'buckyroberts',
      id: 8547538,
      node_id: 'MDQ6VXNlcjg1NDc1Mzg=',
      avatar_url: 'https://avatars.githubusercontent.com/u/8547538?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/buckyroberts',
      html_url: 'https://github.com/buckyroberts',
      followers_url: 'https://api.github.com/users/buckyroberts/followers',
      following_url: 'https://api.github.com/users/buckyroberts/following{/other_user}',
      gists_url: 'https://api.github.com/users/buckyroberts/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/buckyroberts/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/buckyroberts/subscriptions',
      organizations_url: 'https://api.github.com/users/buckyroberts/orgs',
      repos_url: 'https://api.github.com/users/buckyroberts/repos',
      events_url: 'https://api.github.com/users/buckyroberts/events{/privacy}',
      received_events_url: 'https://api.github.com/users/buckyroberts/received_events',
      type: 'User',
      site_admin: false,
    },
    assignees: [
      {
        login: 'buckyroberts',
        id: 8547538,
        node_id: 'MDQ6VXNlcjg1NDc1Mzg=',
        avatar_url: 'https://avatars.githubusercontent.com/u/8547538?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/buckyroberts',
        html_url: 'https://github.com/buckyroberts',
        followers_url: 'https://api.github.com/users/buckyroberts/followers',
        following_url: 'https://api.github.com/users/buckyroberts/following{/other_user}',
        gists_url: 'https://api.github.com/users/buckyroberts/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/buckyroberts/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/buckyroberts/subscriptions',
        organizations_url: 'https://api.github.com/users/buckyroberts/orgs',
        repos_url: 'https://api.github.com/users/buckyroberts/repos',
        events_url: 'https://api.github.com/users/buckyroberts/events{/privacy}',
        received_events_url: 'https://api.github.com/users/buckyroberts/received_events',
        type: 'User',
        site_admin: false,
      },
    ],
    comments: 0,
    created_at: '2021-04-09T04:21:18Z',
    closed_at: '2021-04-14T17:04:42Z',
    body: 'Create a NewRelic account for the website and give @truyenhv access.',
  },
];
