import {Dict} from 'types/generic';

export interface Assignee {
  avatar_url: string;
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

export interface Contributor {
  account_number: string;
  github_avatar_url: string;
  github_username: string;
}

export interface ContributorWithBounties {
  account_number: string;
  github_avatar_url: string;
  github_username: string;
  Bounties: Bounty[];
}

export interface GitHubLabel {
  color: string;
  default: boolean;
  description: string;
  id: number;
  name: string;
  node_id: string;
  url: string;
}

export interface GitHubUser {
  avatar_url: string;
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

export enum Repository {
  all = 'All',
  accountManager = 'Account-Manager',
  bank = 'Bank',
  design = 'Design',
  kotlinSdk = 'Kotlin-SDK',
  marketing = 'Marketing',
  thenewbostonPython = 'thenewboston-python',
  thenewbostonPythonclient = 'thenewboston-python-client',
  thenewbostonJs = 'thenewboston-js',
  validator = 'Validator',
  website = 'Website',
}

export interface RepositoryUrlParams {
  repository: Repository;
}

export enum Time {
  days7 = '7d',
  days30 = '30d',
  all = 'All',
}

export type TimeFilterType = Time.days7 | Time.days30 | Time.all;

export interface BaseIssue {
  id: number;
  node_id: string;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  number: number;
  state: string;
  title: string;
  body: string;
  user: GitHubUser;
  labels: GitHubLabel[];
  assignee: Assignee;
  assignees: Assignee[];
  locked: boolean;
  comments: number;
  closed_at?: any;
  created_at: string;
}

export interface Issue extends BaseIssue {
  amount: number;
  repositoryName: string;
}

export interface Author {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Uploader {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Asset {
  url: string;
  id: number;
  node_id: string;
  name: string;
  label: string;
  uploader: Uploader;
  content_type: string;
  state: string;
  size: number;
  download_count: number;
  created_at: Date;
  updated_at: Date;
  browser_download_url: string;
}

export interface BaseRelease {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  author: Author;
  prerelease: boolean;
  created_at: Date;
  published_at: Date;
  assets: Asset[];
  tarball_url: string;
  zipball_url: string;
  body?: any;
}

export interface Release extends BaseRelease {
  alphaVersion: number;
}

export type FetchGithubReleasesParams = {
  page?: number;
  per_page?: number;
};

interface BaseBounty {
  amount_paid: string;
  completed_by: string;
  issue_id: string;
  pr_id: string;
  repository: string;
  title: string;
}

export interface RawBounty extends BaseBounty {
  completed_date: string;
}

export interface Bounty extends BaseBounty {
  completed_date: Date;
}

export type BountyDict = Dict<Bounty[]>;

export type Milestone = {
  description: string;
  due_on: string;
  id: number;
  number: number;
  title: string;
};
