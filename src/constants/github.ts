import {Repository} from 'types/github';

export const AMOUNT_COLOR = '09825d';

export const REPOSITORIES = [
  Repository.accountManager,
  Repository.bank,
  Repository.thenewbostonPython,
  Repository.thenewbostonPythonclient,
  Repository.validator,
  Repository.website,
];

export const REPOSITORY_FILTERS = [Repository.all, ...REPOSITORIES];
