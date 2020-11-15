import {Repository} from 'types/github';

export const AMOUNT_COLOR = '09825d';

export const REPOSITORIES = [
  {pathname: Repository.accountManager, title: 'Account-Manager'},
  {pathname: Repository.bank, title: 'Bank'},
  {pathname: Repository.thenewbostonPython, title: 'TNB-python'},
  {pathname: Repository.thenewbostonPythonclient, title: 'TNB-python-client'},
  {pathname: Repository.validator, title: 'Validator'},
  {pathname: Repository.website, title: 'Website'},
];

export const REPOSITORY_FILTERS = [{pathname: Repository.all, title: 'All'}, ...REPOSITORIES];
