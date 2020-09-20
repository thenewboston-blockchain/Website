import {Dict} from 'types/generic';

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

export enum Repository {
  all = 'All',
  accountManager = 'Account-Manager',
  bank = 'Bank',
  thenewbostonPython = 'thenewboston-python',
  validator = 'Validator',
  website = 'Website',
}

export type RepositoryFilterType =
  | Repository.all
  | Repository.accountManager
  | Repository.bank
  | Repository.thenewbostonPython
  | Repository.validator
  | Repository.website;

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
