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
