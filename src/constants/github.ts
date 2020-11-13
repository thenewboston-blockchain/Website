import {Repository} from 'types/github';

export const AMOUNT_COLOR = '09825d';

export const REPOSITORIES = [
  {title: 'Account-Manager', url: Repository.accountManager},
  {title: 'Bank', url: Repository.bank},
  {title: 'TNB-python', url: Repository.thenewbostonPython},
  {title: 'TNB-python-client', url: Repository.thenewbostonPythonclient},
  {title: 'Validator', url: Repository.validator},
  {title: 'Website', url: Repository.website},
];

export const REPOSITORY_FILTERS = [{title: 'All', url: Repository.all}, ...REPOSITORIES];
