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

export interface ContributorWithTasks {
  account_number: string;
  github_avatar_url: string;
  github_username: string;
  tasks: Task[];
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
  thenewbostonPython = 'thenewboston-python',
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
  active_lock_reason: string;
  comments: number;
  closed_at?: any;
  created_at: string;
}

export interface Issue extends BaseIssue {
  amount: number;
  repositoryName: string;
}

interface BaseTask {
  amount_paid: string;
  completed_by: string;
  issue_id: string;
  pr_id: string;
  repository: string;
  title: string;
}

export interface RawTask extends BaseTask {
  completed_date: string;
}

export interface Task extends BaseTask {
  completed_date: Date;
}

export type TaskDict = Dict<Task[]>;
